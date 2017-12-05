import { Injectable } from '@angular/core';
//import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HotelService {

  constructor(private http: Http) { }

  findHotelsFromService(searchText, MaximumResult):Observable<string>{
     return this.http.get('http://localhost:3000/?searchText='+searchText+'&maxResult='+MaximumResult).map((res: Response) => res.json());
    }

 getHotelDetailById(hotelId):Observable<string>{
  return this.http.get('http://localhost:3000/hotelDetails/?hotelId='+hotelId).map((res: Response) => res.json());
 }
}
