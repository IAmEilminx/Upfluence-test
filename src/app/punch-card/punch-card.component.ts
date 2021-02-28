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
  @Input() type: string;
  public running: boolean = true;
  public weekdayArray: Array<Day> = [];
  public totalSocialPostsProcessed: number = 0;
  public hoursLabels: Array<string> = hoursLabels;

  constructor() { }

  ngOnInit(): void {
    this.initWeekdayArray();
    this.initSubscription();
  }

  public getCircleSize(postArray): Object {
    if (postArray.length === 0) {
      return { height: '0%', width: '0%' };
    }
    let sizeInPercentage = (postArray.length * 100 / this.totalSocialPostsProcessed) * 20;
    return { height: sizeInPercentage + '%', width: sizeInPercentage + '%' };
  }

  public hoverDetails(postArray: Array<any>): string {
    return 'Number of Social posts ' + postArray.length;
  }

  private initSubscription(): void {
    this.inputSocialPost.subscribe((post: any) => {
      this.addPostToDay(post);
    });
  }

  private addPostToDay(post: SocialPost): void {
    let timestamp = moment.unix(post.timestamp);
    this.totalSocialPostsProcessed++;
    this.weekdayArray[timestamp.day()].hours[timestamp.hour()].push(post);
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
}
