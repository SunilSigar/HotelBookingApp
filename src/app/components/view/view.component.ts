import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../hotel.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  isVisible = true;
  submit = false;
  hotelId:any;
  hotelDetail;
  constructor(private hotelService:HotelService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hotelId = params['id'];
      this.hotelService.getHotelDetailById(this.hotelId).subscribe(data =>
        {
          this.hotelDetail = data;
        });
    })
  }

  boolHotel(){
    this.isVisible = false;
  }
  submitfun(){
    this.submit = true;
  }
  cancelfun(){
    this.submit = false;
    this.isVisible = true;
  }
}
