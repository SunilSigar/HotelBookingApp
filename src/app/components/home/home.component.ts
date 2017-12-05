import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../styles/main.css', '../../styles/main.less', '../../styles/styles.css']
})
export class HomeComponent implements OnInit {
  title = 'Welcome to UI case study for Hotel Booking.';
  description = 'This sample demonstrates how to use Angular and Bootstrap to develop a Single Page Application ';
  desctitle = 'The key features:';
  contents = ['Angular as MVC Framework', 'Bootstrap', 'REST', 'Jasmine'];
  searchcasestudy = 'Start Case Study';

  constructor() { }

  ngOnInit() {
  }

}
