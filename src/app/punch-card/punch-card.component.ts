import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { weekdays, Day, WeekDay } from '../models/day.model';
import { SocialPost } from '../models/social-post.model';
import * as moment from 'moment';

@Component({
  selector: 'punch-card',
  templateUrl: './punch-card.component.html',
  styleUrls: ['./punch-card.component.scss']
})
export class PunchCardComponent implements OnInit {
  @Input() inputSocialPost: Observable<any>;
  public weekdayArray: Array<Day> = [];
  public socialPostCounter = {
    'FacebookStatus': 0,
    'Tweet': 0,
    'Pin': 0,
    'Article': 0,
    'InstagramMedia': 0,
    'YoutubeVideo': 0
  }

  constructor() { }

  ngOnInit(): void {
    this.initWeekdayArray();
    console.log(this.weekdayArray);
    this.inputSocialPost.subscribe((post: SocialPost) => {
      this.addPostToDay(post);
    });
  }

  private addPostToDay(post: SocialPost): void {
    let timestamp = moment.unix(post.timestamp);
    console.log(post.constructor.name);
    this.socialPostCounter[post.constructor.name]++;
    this.weekdayArray;
    this.weekdayArray[timestamp.day()].hours[timestamp.hour()].push(post)
    debugger;
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
