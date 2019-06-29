import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { SignupComponent } from './signup/signup.component';
import { EventSelectionComponent } from './event-selection/event-selection.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'event', component: EventSelectionComponent },
  { path: 'event/:id/signup', component: SignupComponent },
  { path: 'event/:id/signup/complete', component: SignupCompleteComponent },
  { path: 'event/:id/leaderboard', component: LeaderboardComponent },
  { path: 'event/:id/tv', component: TvComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
