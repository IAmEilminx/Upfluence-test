import { UpfluenceSseService } from './services/upfluence-sse.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PunchCardComponent } from './punch-card/punch-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule
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
