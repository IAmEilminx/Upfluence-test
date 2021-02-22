import { UpfluenceSseService } from './services/upfluence-sse.service';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'upfluence-test';
  public notifyChild: Subject<any> = new Subject<any>();

  constructor(
    private sseService: UpfluenceSseService
  ) { }

  ngOnInit() {
    this.getSocialPosts();
  }

  private getSocialPosts(): void {
    this.sseService.getStream().subscribe((socialPost) => {
      this.notifyChild.next(socialPost);
    });
  }
}
