import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchstring ='Search Hotels';
  searchText ='Bengaluru';
  MaximumResult = '5';

  results;
  constructor(private http: HttpClient){}

  findHotels(){
     this.http.get('http://localhost:3000').subscribe(data =>
      {console.log('=========================:'+JSON.stringify(data));
      this.results = JSON.stringify(data);
      });
  }
  ngOnInit() {
  }

}
