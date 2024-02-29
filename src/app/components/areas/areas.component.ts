import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListingService } from '../../Service/AddListing/add-listing.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  providers:[AddListingService],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css'
})
export class AreasComponent implements OnInit {
 
  constructor(private areasService:AddListingService){}
 
  areas:any;
  areasNY:any;
  areasFL:any;
  areasCA:any;
  areasTX:any;
  areasCO:any;

  ngOnInit(): void {
    this.areasService.GellAllareas().subscribe({
      next:(data)=>{
        console.log(data)
        this.areas=data
        console.log( this.areas)
        console.log( this.areas[0].state)

        this.areasNY=this.areas.find((item:any)=>
          item.state=="NY")

          console.log(this.areasNY)
        this.areasFL=this.areas.find((item:any)=>
          item.state=='FL'
        )
        console.log(this.areasFL)

        this.areasCA=this.areas.find((item:any)=>
          item.state=='CA'
        )
        this.areasTX=this.areas.find((item:any)=>
          item.state=='TX'
        )
        this.areasCO=this.areas.find((item:any)=>
          item.state=='CO'
        )
     
      error:()=>{
        alert('error ya ba4a')
      }
    }})  }

}


