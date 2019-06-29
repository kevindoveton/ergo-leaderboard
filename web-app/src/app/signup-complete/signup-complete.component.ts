import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-signup-complete',
  templateUrl: './signup-complete.component.html',
  styleUrls: ['./signup-complete.component.scss']
})
export class SignupCompleteComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => {
      this.back();
    }, 3000);
  }

  back() {
    this.route.params.pipe(take(1)).subscribe((params: { id: string }) => {
      this.router.navigate(['event/:id/signup', { id: params.id }]);
    });
  }
}
