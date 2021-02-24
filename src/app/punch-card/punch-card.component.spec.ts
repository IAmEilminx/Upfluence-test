import { Tweet } from './../models/social-post.model';
import { UpfluenceSseService } from './../services/upfluence-sse.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PunchCardComponent } from './punch-card.component';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { weekdays } from '../models/day.model';
import { timeStamp } from 'console';

let testSocialPost = new Tweet({
  content: "Join Ray tomorrow morning from 9.45am, when he’ll be speaking to the eco-rangers at @PhillipIslandNP for their Peng… https://t.co/gePoSbsLOq",
  favorites: 14,
  id: '703783015',
  post_id: "1364188478792224768",
  retweets: 2,
  timestamp: 1614082853
});

let mockSseService = {
  getStream: () => new Observable((obs) => {
    obs.next(testSocialPost)
  })
}

describe('PunchCardComponent', () => {
  let component: PunchCardComponent;
  let fixture: ComponentFixture<PunchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PunchCardComponent],
      providers: [
        { provide: UpfluenceSseService, useValue: mockSseService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchCardComponent);
    component = fixture.componentInstance;
    component.inputSocialPost = mockSseService.getStream();
    fixture.detectChanges();
  });

  describe('Component Init : ', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should init the WeekDay Array', () => {
      expect(component.weekdayArray.length).toBe(7);
      for (let i = 0; i < weekdays.length; ++i) {
        expect(component.weekdayArray[i].dayName).toEqual(weekdays[i]);
        expect(component.weekdayArray[i].hours.length).toBe(24);
      }
    });

    it('should init the SocialPost counters', () => {
      expect(component.socialPostCounter).toEqual({
        'FacebookStatus': { counter: 0, show: true },
        'Tweet': { counter: 1, show: true },
        'Pin': { counter: 0, show: true },
        'Article': { counter: 0, show: true },
        'InstagramMedia': { counter: 0, show: true },
        'YoutubeVideo': { counter: 0, show: true }
      })
    });

    it('should subscribe to the observable on component init', () => {
      expect(component.totalSocialPostsProcessed).toBe(1);
    });
  });

  describe('public methods : ', () => {
    describe('getCircleSize', () => {
      it('if InputArray is empty, it should return 0% height & width object', () => {
        expect(component.getCircleSize([])).toEqual({ height: '0%', width: '0%' });
      });

      it('if InputArray is !empty, it should calculate the correct size and return it as an object', () => {
        expect(component.getCircleSize([testSocialPost])).toEqual({ height: '20%', width: '20%' })
      });
    });

    describe('hoverDetails', () => {
      it('should return a string with the total number of social posts for a day / hour specified', () => {
        expect(component.hoverDetails([testSocialPost])).toEqual('Number of Social posts 1');
      });
    });

    describe('stopSubscription', () => {
      it('should unsubsribe on the input observable upon call', () => {
        const spy = spyOn(component['subscription'], 'unsubscribe');
        component.stopSubscription();
        expect(spy).toHaveBeenCalled();
      });
    });

    describe('restartSubscription', () => {
      it('should reinitialize the component and restart the subscription', () => {
        component.restartSubscription();
        component.weekdayArray;
        expect(component.socialPostCounter).toEqual({
          'FacebookStatus': { counter: 0, show: true },
          'Tweet': { counter: 1, show: true },
          'Pin': { counter: 0, show: true },
          'Article': { counter: 0, show: true },
          'InstagramMedia': { counter: 0, show: true },
          'YoutubeVideo': { counter: 0, show: true }
        });
        expect(component.totalSocialPostsProcessed).toBe(1);
      });
    });
  });

  describe('SocialPost processing', () => {
    it('should place the input post into the correct day/hour array', fakeAsync(() => {
      let inputTimestamp = moment.unix(testSocialPost.timestamp);
      let tmpArray = component.weekdayArray[inputTimestamp.day()].hours[inputTimestamp.hour()];
      component;
      expect(component.totalSocialPostsProcessed).toBe(1);
      expect(tmpArray)
        .toEqual([testSocialPost]);
    }));
  });
});

