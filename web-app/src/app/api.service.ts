import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap, catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  current = {
    EventId: '',
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

  addTime() {
    const participantUrl = environment.api + '/participants/';
    const timeUrl = environment.api + '/times/';
  }
}
