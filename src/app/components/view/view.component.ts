import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  rForm: FormGroup;
  post:any;                     // A property for our submitted form
 // description:string = '';
  name:string = '';
  titleAlert:string = 'This field is required';

  constructor(private hotelService:HotelService, private route:ActivatedRoute, private fb: FormBuilder) {
    this.rForm = fb.group({
      'name' : [null, Validators.required],
     // 'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate' : ''
    });
   }

   addPost(post) {
    this.submit = true;
  //  this.description = post.description;
    this.name = post.name;
  }

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
