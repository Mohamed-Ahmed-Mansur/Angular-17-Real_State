import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddListingService } from '../../Service/AddListing/add-listing.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-state-details',
  standalone: true,
  imports: [HttpClientModule, RouterModule],
  providers:[AddListingService],
  templateUrl: './state-details.component.html',
  styleUrl: './state-details.component.css'
})

export class StateDetailsComponent implements OnInit{
  State = "";
  Bedrooms = "";
  Category = "";
  stateSearched: any;
  
  constructor(myActivated: ActivatedRoute,private stateServ:AddListingService){
    this.State = myActivated.snapshot.params["state"];
    this.Bedrooms = myActivated.snapshot.params["bedrooms"];
    this.Category = myActivated.snapshot.params["category"];
  } 
  // searched:any = [];

//  async getData(){
//   return await this.stateServ.SearchedArray
//  }

  ngOnInit(): void {
    // console.log(this.searched);
    // console.log("2");
    // console.log(this.stateServ.getSearchedData());
    // console.log(this.searched)
    this.stateServ.getSearchedData(this.State, this.Bedrooms, this.Category).subscribe({
      next: data => {
        // const [ myObj ]: any = data
        this.stateSearched = data;
      },
      error: err => {
        console.log(err)
      }
    })
  }

}