import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input()
  event: IEvent;

  @Output()
  tvClick = new EventEmitter();

  @Output()
  signupClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
