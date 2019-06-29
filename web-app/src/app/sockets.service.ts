import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITime } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {
  private time$ = new Subject<ITime>();

  constructor() {
    const socket = io(environment.api);
    socket.on('time', res => {
      console.log('incoming socket');
      console.log(res);
      this.time$.next(res);
    });
  }

  time() {
    return this.time$;
  }
}
