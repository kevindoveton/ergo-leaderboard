import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private api: ApiService) {}

  eventName = 'Kev\'s rad event';

  ngOnInit() {}

  setCategory(id: number) {}

  submit() {}
}
