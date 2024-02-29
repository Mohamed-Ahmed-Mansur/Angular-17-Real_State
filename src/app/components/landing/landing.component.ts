import {  HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Splide from '@splidejs/splide';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,RouterModule],
  providers:[DataService],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {
  // state:string;
states:any;
searchedLocation='';
SearchedRoom="";
SearchedType="";
statesWithRooms:any;
statesWithType:any;
  constructor(myActivated:ActivatedRoute,private stateServ:DataService,private router:Router){
    // this.state= myActivated.snapshot.params["state"];
    // console.log("state is "+this.state)
   
    // this.Country= "NY";
  }
 
 
  /*splide  */
  ngAfterViewInit(): void {
    new Splide('.splide').mount();
  }

  getLocation(ev:any){
    // console.log(ev.target.value);
    this.searchedLocation = ev.target.value;
  }

  getRooms(ev:any){
    // console.log(ev.target.value);
    this.SearchedRoom = ev.target.value;  //string
  }
  getType(ev:any){
    // console.log(ev.target.value);
    this.SearchedType = ev.target.value;  //string
  }

// Method to fetch data when search button is clicked
async onSearch() {
  // console.log(this.stateServ.SearchedArray);
  // console.log(this.searchedLocation)
  // console.log(this.SearchedRoom)
  // console.log(this.SearchedType)
    // await this.stateServ.getStateByCountry(this.searchedLocation).subscribe({
    //   next:(data)=>{
    //     this.states = data;
    //     console.log(this.searchedLocation)
    //     console.log("Got states",this.states);
    //     this.statesWithRooms = this.states.filter((item:any) => item.bedrooms === +this.SearchedRoom );
    //     // console.log(typeof this.states[0].bedrooms, typeof this.SearchedRoom);//num, str
    //     console.log("Got statesWithRooms",this.statesWithRooms);
    //     this.statesWithType = this.statesWithRooms.filter((item:any) =>  item.category === this.SearchedType);
    //     // console.log(typeof this.statesWithRooms[0].category, typeof this.SearchedType);//num, str
    //     console.log("Got statesWithType",this.statesWithType);

    //     // this.statesWithType.map((item: any) => this.stateServ.SearchedArray.push(item));
    //     this.stateServ.getSearchedData(this.statesWithType);
    //     console.log("Got SearchedArray landing",this.stateServ.SearchedArray);
    //   },
    //     error:(err)=>{console.log(err)}
    //   })
    //   this.router.navigateByUrl('search');

    await this.stateServ.postSearchedData({room: this.SearchedRoom,location: this.searchedLocation,type: this.SearchedType});

    this.router.navigateByUrl('details');
  }

}
