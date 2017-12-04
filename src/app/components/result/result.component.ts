import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  results;
  abc(){
    console.log("hi");
  }
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
