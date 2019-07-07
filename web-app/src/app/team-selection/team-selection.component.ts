import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITeam } from '../api.service';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss']
})
export class TeamSelectionComponent implements OnInit {
  constructor() {}

  @Input() team: string;
  @Output() teamChange: EventEmitter<string> = new EventEmitter();
  @Input() teams: ITeam[];

  newTeamVal: string;

  ngOnInit() {
    console.log(this.team, this.teams);
  }

  newTeam() {
    this.teamChange.emit(this.newTeamVal);
  }

  changeTeam(team: string) {
    this.teamChange.emit(team);
  }
}
