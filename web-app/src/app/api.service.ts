import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, catchError, map, take, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  current = {
    EventId: 1,
    Token: ''
  };

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const url = environment.api + '/auth/local';
    return this.http.post(url, { identifier: username, password }).pipe(
      take(1),
      tap((el: any) => {
        this.current.Token = el.jwt;
      }),
      map(el => true),
      catchError(err => of(false))
    );
  }

  getTeam(teamId: number) {
    const teamUrl = environment.api + '/teams/';

    return this.http
      .get<ITeam[]>(teamUrl, { params: { id: String(teamId) } })
      .pipe(
        take(1),
        map(el => (el && el.length > 0 ? el[0] : undefined))
      );
  }

  getEvent(id: number) {
    const eventUrl = environment.api + '/events/' + id;

    return this.http.get<IEvent>(eventUrl).pipe(take(1));
  }

  getTimes(eventId: number) {
    const timeUrl = environment.api + '/times';

    return this.http
      .get<ITime[]>(timeUrl, {
        params: { Event: String(eventId), _sort: 'Time:ASC' }
      })
      .pipe(take(1));
  }

  getAllEvents() {
    const eventUrl = environment.api + '/events/';

    return this.http.get<IEvent[]>(eventUrl).pipe(take(1));
  }

  getUpcomingEvents() {
    const upcomingUrl = environment.api + '/events/';

    return this.http.get<IEvent[]>(upcomingUrl).pipe(take(1));
  }

  addTime(user: IParticipant, time: ITime, event: number) {
    const participantUrl = environment.api + '/participants/';
    const timeUrl = environment.api + '/times/';
    const teamUrl = environment.api + '/teams/';

    // create team
    // create participant
    // create time
    return this.http.post(teamUrl, user.Team).pipe(
      take(1),
      switchMap((team: ITeam) => {
        return this.http.post(participantUrl, { ...user, Team: team.id }).pipe(
          take(1),
          switchMap((participant: IParticipant) => {
            return this.http
              .post(timeUrl, {
                Time: time.Time,
                Event: event,
                Participant: participant.id
              })
              .pipe(take(1));
          })
        );
      })
    );
  }
}

export type ModelOrId<R> = R | number;

export interface IUser {
  id?: number;
  username: string;
}

export interface ITeam {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  Name: string;
  Event: ModelOrId<IEvent>;
}

export interface IParticipant {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  FirstName: string;
  LastName: string;
  Email: string;
  Gender: string;
  Team?: ModelOrId<ITeam>;
}

export interface ITime {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  Time: number;
  Event?: IEvent;
  Participant?: IParticipant;
}

export interface ICompany {
  id: number;
  created_at?: Date;
  updated_at?: Date;

  Name: string;
  Logo: string;
}

export interface IEvent {
  id?: number;
  created_at?: Date;
  updated_at?: Date;

  Name: string;
  Date: Date;
  HostCompany: ICompany;
  Client: ICompany;
}
