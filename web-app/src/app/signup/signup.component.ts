import { Component, OnInit } from '@angular/core';
import { ApiService, IEvent } from '../api.service';
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
    time: 15.0,
    email: '',
    gender: 'Male',
    event: 0
  };

  ngOnInit() {
    this.details.event = 0;
    this.route.params.pipe(take(1)).subscribe(el => {
      this.api.getEvent(el.id).subscribe(ev => {
        this.event = ev;
      });
    });
  }

  setCategory(id: number) {
    this.details.category = id;
    this.details.gender = id === 0 ? 'Male' : 'Female';
  }

  submit() {
    this.api
      .addTime(
        {
          FirstName: this.details.firstName,
          LastName: this.details.lastName,
          Email: this.details.email,
          Gender: this.details.gender,
          Team: { Name: this.details.team, Event: this.event.id }
        },
        { Time: this.details.time },
        this.event.id
      )
      .subscribe(val => {
        console.log(val);
        this.router.navigate([
          'event/:id/signup/complete',
          { id: this.event.id }
        ]);
      });
  }
}
