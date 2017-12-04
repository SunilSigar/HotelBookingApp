import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  searchstring ='Search Hotels';
  searchText ='Marathalli';
  MaximumResult = 5;

  isValid = true;
  results;
  constructor(private http: HttpClient){}

  findHotels(){
     this.isValid = false;
     this.http.get('http://localhost:3000/?searchText='+this.searchText+'&maxResult='+this.MaximumResult).subscribe(data =>
      {console.log('=========================:'+JSON.stringify(data));
      this.results = data;
      });
  }
  ngOnInit() {
  }

}
