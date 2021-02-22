import { UpfluenceSseService } from './services/upfluence-sse.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PunchCardComponent } from './punch-card/punch-card.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [
    UpfluenceSseService
  ],
  declarations: [
    AppComponent,
    PunchCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
