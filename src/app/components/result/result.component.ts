import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../hotel.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  results;
  searchText ='Marathalli';
  MaximumResult = 5;

  constructor(private hotelService:HotelService, private route:ActivatedRoute){}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.searchText = params['searchText'];
      this.MaximumResult = params['MaximumResult'];
      this.hotelService.findHotelsFromService(this.searchText, this.MaximumResult).subscribe(data =>
        {
                this.results = data;
                console.log(this.results);
        });
    })
  }

}
