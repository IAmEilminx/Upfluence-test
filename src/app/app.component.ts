import { SocialPost } from './models/social-post.model';
import { UpfluenceSseService } from './services/upfluence-sse.service';
import { Component } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'upfluence-test';
  public notifyChild: Subject<any> = new Subject<any>();
  public running: boolean = true;
  public socialPostTypes = {
    'FacebookStatus': {},
    'Tweet': {},
    'Pin': {},
    'Article': {},
    'InstagramMedia': {},
    'YoutubeVideo': {}
  }

  private subscription: Subscription;

  constructor(
    private sseService: UpfluenceSseService
  ) { }

  ngOnInit() {
    this.counterInit();
    this.getSocialPosts();
  }

  public stopSubscription(): void {
    this.running = false;
    this.subscription.unsubscribe();
  }

  public restartSubscription(): void {
    this.running = true;
    this.getSocialPosts();
  }

  private getSocialPosts(): void {
    this.subscription = this.sseService.getStream().subscribe((socialPost) => {
      this.filterSocialPost(socialPost);
    });
  }

  private filterSocialPost(post: SocialPost): void {
    this.socialPostTypes[post.constructor.name].counter++;
    this.socialPostTypes[post.constructor.name].notifyChildComponent.next(post);
  }

  private counterInit(): void {
    Object.keys(this.socialPostTypes).forEach(socialPost => {
      this.socialPostTypes[socialPost] = {
        counter: 0,
        notifyChildComponent: new Subject<any>()
      };
    });
  }
}
