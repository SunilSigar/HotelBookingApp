import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pagetitle = 'Welcome to UI case study for Hotel Booking';
  description = 'This sample demonstrates how to use Angular and Bootstrap to develop a Single Page Application ';
  desctitle = 'The key features:';
  contents = ['Angular as MVC Framework', 'Bootstrap', 'REST', 'Jasmine'];
  searchcasestudy = 'Start Case Study';

  searchstring ='Search Hotels';
  searchText ='Bengaluru';
  MaximumResult = '5';


  findHotels(){
      
  }
}
