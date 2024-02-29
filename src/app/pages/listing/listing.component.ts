import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faBed,faBath} from '@fortawesome/free-solid-svg-icons';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [HttpClientModule,RouterModule,FontAwesomeModule],
  providers:[AddListingService],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit{
  searched:any;
   state:any;
   stateSearched:any;
   result:any
   faBed=faBed
   faBath=faBath

  constructor(private areasService : AddListingService) {}
    ngOnInit(): void {
    this.areasService.GellAllareas().subscribe({
      next:(data)=>{
        this.state = data;
        this.stateSearched=data
        console.log(this.state);
              },
      error:(err)=>{
        console.log(err)
      }

})}
getsearch(ev:any){
  console.log(ev.target.value);
  this.searched = ev.target.value;
  
  console.log(this.searched);
  console.log("alldata",this.state);

  this.stateSearched = this.state.filter((el: any) => {
    this.result = el.location.toLowerCase().includes(this.searched.toLowerCase());
    console.log("Got statesWithRooms", this.result);
        return this.result;
  });
console.log(this.stateSearched )
 

  
}
}

