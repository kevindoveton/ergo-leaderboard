import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { SignupCompleteComponent } from './signup-complete/signup-complete.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'tv', component: TvComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup/complete', component: SignupCompleteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
