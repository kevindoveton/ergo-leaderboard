import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, ITime, IEvent } from '../api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {
  times: ITime[];
  event: IEvent;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params: { id: number }) => {
      this.api.getEvent(params.id).subscribe(event => {
        this.event = event;
      });

      this.api.getTimes(params.id).subscribe(times => {
        this.times = times;
      });
    });
  }
}
