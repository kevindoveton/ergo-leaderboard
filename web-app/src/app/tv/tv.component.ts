import { Component, OnInit } from '@angular/core';
import { ApiService, IEvent, ITime, ITeam } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  event: IEvent;
  times: ITime[];

  fastest: IFastest = this.initFastest();

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe((params: IParams) => {
      this.api
        .getEvent(params.id)
        .pipe(take(1))
        .subscribe(event => {
          this.event = event;
        });

      this.updateLeaderboard(params.id);

      setInterval(() => {
        this.updateLeaderboard(params.id);
      }, 1000 * 10);
    });
  }

  private initFastest() {
    return {
      Male: [],
      Female: [],
      Team: []
    };
  }

  updateLeaderboard(eventId: number) {
    this.api.getTimes(eventId).subscribe(times => {
      this.times = times;
      this.updateTimes();
    });
  }

  getTeam(teamIds: number[]) {
    for (const team of teamIds) {
    }
  }

  updateTimes() {
    this.fastest = this.initFastest();

    const teamCount: { [key: string]: number } = {};
    const recordedParticipants: { [id: number]: boolean } = {};
    for (const time of this.times) {
      if (!time.Participant) {
        return;
      }

      const gender = time.Participant.Gender;
      const team = String(time.Participant.Team);
      if (!recordedParticipants[time.Participant.id]) {
        recordedParticipants[time.Participant.id] = true;

        if (team) {
          if (!teamCount[team]) {
            teamCount[team] = 0;
          }

          teamCount[team]++;
        }
      }

      if (gender && gender === 'Male') {
        console.log(time);
        if (
          this.fastest.Male.length === 0 ||
          this.fastest.Male[0].Time === time.Time
        ) {
          this.fastest.Male.push(time);
        } else if (time.Time < this.fastest.Male[0].Time) {
          this.fastest.Male = [time];
        }
      } else if (gender && gender === 'Female') {
        if (
          this.fastest.Female.length === 0 ||
          this.fastest.Female[0].Time === time.Time
        ) {
          this.fastest.Female.push(time);
        } else if (time.Time < this.fastest.Female[0].Time) {
          this.fastest.Female = [time];
        }
      }
    }

    let highestCount: { Count: number; Team: string[] } = {
      Count: 0,
      Team: []
    };
    for (const team of Object.keys(teamCount)) {
      const count = teamCount[team];
      if (count > highestCount.Count) {
        highestCount = { Count: count, Team: [team] };
      } else if (count === highestCount.Count) {
        highestCount.Team.push(team);
      }
    }

    this.fastest.Team = [];
    for (const team of highestCount.Team) {
      this.api.getTeam(parseInt(team, 10)).subscribe(teamObj => {
        this.fastest.Team.push({ Team: teamObj, Count: highestCount.Count });
      });
    }

    setTimeout(() => {
      console.log(this.fastest);
    }, 2500);
  }
}

interface IParams {
  id: number;
}

interface IFastest {
  Male: ITime[];
  Female: ITime[];
  Team: { Team: ITeam; Count: number }[];
}
