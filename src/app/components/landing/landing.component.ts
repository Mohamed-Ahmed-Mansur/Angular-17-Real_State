import {  HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Splide from '@splidejs/splide';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,RouterModule],
  providers:[AddListingService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {

  searchedLocation = "";
  SearchedRoom = "";
  SearchedType = "";

  constructor(
    myActivated: ActivatedRoute, 
    private stateServ: AddListingService,
    private router: Router
  ) {}
 
  ngAfterViewInit(): void {
    new Splide('.splide').mount();
  }

  getLocation(ev:any){
    this.searchedLocation = ev.target.value;
  }

  getRooms(ev:any){
    this.SearchedRoom = ev.target.value; 
  }
  getType(ev:any){
    this.SearchedType = ev.target.value;
  }

  onSearch() {
    // this.stateServ.postSearchedData([this.searchedLocation, this.SearchedRoom, this.SearchedType]).subscribe();
    this.router.navigateByUrl(`details/${this.searchedLocation}/${this.SearchedRoom}/${this.SearchedType}`);
  }

}
