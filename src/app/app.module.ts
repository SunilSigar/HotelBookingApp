import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule} from "@angular/router";
import { HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './components/result/result.component';
import { ViewComponent } from './components/view/view.component';
import { HotelService } from './hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ResultComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, HttpModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'search',component:SearchComponent},
      {path:'result/:searchText/:MaximumResult',component:ResultComponent},
      {path:'view/:id',component:ViewComponent},
      {path:'**',component:HomeComponent}
    ]),
  ],
  providers: [ResultComponent, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
