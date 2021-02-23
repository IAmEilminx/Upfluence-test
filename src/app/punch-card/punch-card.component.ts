import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { weekdays, Day, WeekDay, hoursLabels } from '../models/day.model';
import { SocialPost } from '../models/social-post.model';
import * as moment from 'moment';

@Component({
  selector: 'punch-card',
  templateUrl: './punch-card.component.html',
  styleUrls: ['./punch-card.component.scss']
})
export class PunchCardComponent implements OnInit {
  @Input() inputSocialPost: Observable<any>;
  public running: boolean = true;
  public weekdayArray: Array<Day> = [];
  public totalSocialPostsProcessed: number = 0;
  public hoursLabels: Array<string> = hoursLabels;
  public socialPostCounter = {
    'FacebookStatus': {},
    'Tweet': {},
    'Pin': {},
    'Article': {},
    'InstagramMedia': {},
    'YoutubeVideo': {}
  }

  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.initWeekdayArray();
    this.counterInit();
    this.initSubscription();
  }

  public getCircleSize(postArray): Object {
    if (postArray.length === 0) {
      return { height: '0%', width: '0%' };
    }
    let activeLegendSPs = this.getNumberOfPostsBasedOnUserFilters(postArray)
    let sizeInPercentage = activeLegendSPs * 20;
    return { height: sizeInPercentage + '%', width: sizeInPercentage + '%' };
  }

  public hoverDetails(postArray: Array<SocialPost>): string {
    return 'Number of Social posts ' + this.getNumberOfPostsBasedOnUserFilters(postArray);
  }

  public stopSubscription(): void {
    this.running = false;
    this.subscription.unsubscribe();
  }

  public restartSubscription(): void {
    this.weekdayArray = [];
    this.initWeekdayArray();
    this.counterInit();
    this.totalSocialPostsProcessed = 0;
    this.running = true;
    this.initSubscription();
  }

  private getNumberOfPostsBasedOnUserFilters(postArray: Array<SocialPost>): number {
    return postArray.filter((spType) => {
      return Object.keys(this.socialPostCounter).filter((key) => {
        return key === spType.constructor.name
          && this.socialPostCounter[key].show === true
      }).length !== 0;
    }).length;
  }

  private initSubscription(): void {
    this.subscription = this.inputSocialPost.subscribe((post: SocialPost) => {
      this.addPostToDay(post);
    });
  }

  private addPostToDay(post: SocialPost): void {
    let timestamp = moment.unix(post.timestamp);
    this.totalSocialPostsProcessed++;
    this.socialPostCounter[post.constructor.name].counter++;
    this.weekdayArray[timestamp.day()].hours[timestamp.hour()].push(post)
  }

  private initWeekdayArray(): void {
    weekdays.forEach((day: WeekDay) => {
      this.weekdayArray.push({
        dayName: day,
        hours: this.initAllHours()
      });
    });
  }

  private initAllHours(): Array<any> {
    let hourArray = [];
    for (let i = 0; i < 24; ++i) {
      hourArray.push([]);
    }
    return hourArray;
  }

  private counterInit(): void {
    Object.keys(this.socialPostCounter).forEach(socialPost => {
      this.socialPostCounter[socialPost] = {
        counter: 0,
        show: true
      };
    });
  }
}
