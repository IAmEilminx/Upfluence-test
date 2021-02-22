import { SocialPost, FacebookStatus, Tweet, Pin, Article, InstagramMedia, YoutubeVideo } from './../models/social-post.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UpfluenceSseService {

  constructor(
  ) { }

  getStream(): Observable<
    FacebookStatus
    | Tweet
    | Pin
    | Article
    | InstagramMedia
    | YoutubeVideo
  > {
    return new Observable(obs => {
      const eventSource = this.getEventSource();

      eventSource.addEventListener('message', (event: MessageEvent) => {
        let socialPost = JSON.parse(event.data);
        if (Object.keys(socialPost).length)
          obs.next(this.getTypeFromObjectKey(socialPost));
      })
      eventSource.addEventListener('error', (err: MessageEvent) => {
        obs.error(err);
      })
    });
  }

  private getEventSource(): EventSource {
    return new EventSource(environment.upfluenceStreamUrl);
  }

  // Super Ugly ! :O
  private getTypeFromObjectKey(object: any) {
    let objKey = Object.keys(object)[0];
    if (objKey === 'facebook_status') {
      return new FacebookStatus(object[objKey]);
    } else if (objKey === 'tweet') {
      return new Tweet(object[objKey]);
    } else if (objKey === 'pin') {
      return new Pin(object[objKey]);
    } else if (objKey === 'article') {
      return new Article(object[objKey]);
    } else if (objKey === 'youtube_video') {
      return new YoutubeVideo(object[objKey]);
    } else if (objKey === 'instagram_media') {
      return new InstagramMedia(object[objKey]);
    }
  }
}
