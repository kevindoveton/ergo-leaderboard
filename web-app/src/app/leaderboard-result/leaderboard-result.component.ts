import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'leaderboard-result',
  templateUrl: './leaderboard-result.component.html',
  styleUrls: ['./leaderboard-result.component.scss']
})
export class LeaderboardResultComponent implements OnInit {
  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  team: string;

  @Input()
  time: string;

  @Input()
  category: string;

  constructor() {}

  ngOnInit() {}
}
