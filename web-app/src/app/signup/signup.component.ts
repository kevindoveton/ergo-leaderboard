import { Component, OnInit } from '@angular/core';
import { ApiService, IEvent, ITeam } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  event: IEvent;
  details = {
    firstName: '',
    lastName: '',
    category: 0,
    team: '',
    time: '',
    email: '',
    gender: 'Male',
    event: 0
  };
  errors = {
    firstName: false,
    lastName: false,
    team: false,
    time: false,
    email: false
  };

  teams: ITeam[] = [];

  teamSelectionVisible = false;

  ngOnInit() {
    this.details.event = 0;
    this.route.params.pipe(take(1)).subscribe(el => {
      this.api.getEvent(el.id).subscribe(ev => {
        this.event = ev;
      });

      this.api.getTeams(el.id).subscribe(ev => {
        this.teams = ev;
      });
    });
  }

  setCategory(id: number) {
    this.details.category = id;
    this.details.gender = id === 0 ? 'Male' : 'Female';
  }

  validateForm(): boolean {
    this.errors = {
      firstName: this.details.firstName === '',
      lastName: this.details.lastName === '',
      team: this.details.team === '',
      time: this.details.time === '' || (this.details.time as any) < 0,
      email: this.details.email === '' || this.details.email.indexOf('@') === -1
    };

    for (const key of Object.keys(this.errors)) {
      if (this.errors[key] === true) {
        return false;
      }
    }

    return true;
  }

  submit() {
    if (!this.validateForm()) {
      return;
    }

    let teamId: number;
    for (const team of this.teams) {
      if (team.Name === this.details.team) {
        teamId = team.id;
      }
    }

    this.api
      .addTime(
        {
          FirstName: this.details.firstName,
          LastName: this.details.lastName,
          Email: this.details.email,
          Gender: this.details.gender,
          Team: { id: teamId, Name: this.details.team, Event: this.event.id }
        },
        { Time: this.details.time as any },
        this.event.id
      )
      .subscribe(val => {
        this.router.navigate([
          'event/:id/signup/complete',
          { id: this.event.id }
        ]);
      });
  }

  chooseTeam() {
    this.teamSelectionVisible = true;
  }
}
