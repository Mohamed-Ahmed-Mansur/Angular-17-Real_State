import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-selectdata',
  standalone: true,
  imports: [RouterModule,HttpClientModule,FontAwesomeModule],
  providers:[AddListingService],

  templateUrl: './selectdata.component.html',
  styleUrl: './selectdata.component.css'
})
export class SelectdataComponent implements OnInit{
  State=''
  data:any
  faCoffee=faCoffee
  faBed=faBed
  faBath=faBath
  constructor(myActivated:ActivatedRoute,private areasService:AddListingService){
    this.State = myActivated.snapshot.params["state"];
  }
  ngOnInit(): void {
    this.areasService.GellAllareasbyid( this.State).subscribe({
      next:(data)=>{
        // console.log(data)
        this.data = data;
        console.log(data)
      },
      error:(err)=>{console.log(err)}
    })
  }
}




