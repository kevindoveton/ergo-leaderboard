import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tv-category',
  templateUrl: './tv-category.component.html',
  styleUrls: ['./tv-category.component.scss']
})
export class TvCategoryComponent implements OnInit {

  @Input()
  category:string;

  @Input()
  firstName: string;

  @Input()
  lastName: string;

  @Input()
  time: string;

  constructor() { }

  ngOnInit() {
  }

}
