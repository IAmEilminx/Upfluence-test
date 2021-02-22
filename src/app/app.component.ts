import { FacebookStatus, Tweet, Article, Pin, InstagramMedia, YoutubeVideo } from './models/social-post.model';
import { UpfluenceSseService } from './services/upfluence-sse.service';
import { Component } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'upfluence-test';
  private socialPostArray: Array<
    FacebookStatus
    | Tweet
    | Pin
    | Article
    | InstagramMedia
    | YoutubeVideo
  > = [];

  constructor(
    private sseService: UpfluenceSseService
  ) { }

  ngOnInit() {
    this.sseService.getStream().subscribe((socialPost) => {
      this.socialPostArray.push(socialPost);
      console.log(socialPost.constructor.name);
      console.log(moment.unix(socialPost.timestamp).format('LLLL'));
      debugger;
    });
  }
}
