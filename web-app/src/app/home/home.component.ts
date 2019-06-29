import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  username = '';
  password = '';
  error = false;

  ngOnInit() {}

  login() {
    this.api.login(this.username, this.password).subscribe(el => {
      this.error = !el;

      if (el) {
        this.router.navigate(['/event']);
      }
    });
  }
}
