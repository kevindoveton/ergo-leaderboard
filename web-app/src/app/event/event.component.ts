import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../api.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input()
  event: IEvent;

  constructor() {}

  ngOnInit() {}
}
