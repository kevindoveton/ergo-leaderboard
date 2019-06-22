import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LeaderboardResultComponent } from './leaderboard-result/leaderboard-result.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TvComponent } from './tv/tv.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { EventSelectionComponent } from './event-selection/event-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent,
    LeaderboardResultComponent,
    TvComponent,
    SignupCompleteComponent,
    SignupComponent,
    EventSelectionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
