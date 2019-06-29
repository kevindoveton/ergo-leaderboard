import { Component, OnInit } from '@angular/core';
import { ApiService, IEvent } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-selection',
  templateUrl: './event-selection.component.html',
  styleUrls: ['./event-selection.component.scss']
})
export class EventSelectionComponent implements OnInit {
  events: IEvent[];

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.api.getUpcomingEvents().subscribe(events => {
      this.events = events;
      console.log(this.events);
    });
  }

  selectEvent(id: number) {
    this.router.navigate(['/event/:id/signup', { id }]);
  }
}
