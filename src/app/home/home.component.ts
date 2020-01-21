import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from './../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
