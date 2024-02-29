import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-state-details',
  standalone: true,
  imports: [HttpClientModule],
  providers:[DataService],
  templateUrl: './state-details.component.html',
  styleUrl: './state-details.component.css'
})

export class StateDetailsComponent implements OnInit{
  
  constructor(private stateServ:DataService){
  } 
  searched:any = [];

//  async getData(){
//   return await this.stateServ.SearchedArray
//  }

  ngOnInit(): void {
    // console.log(this.searched);
    // console.log("2");
    console.log(this.stateServ.getSearchedData());
    // console.log(this.searched)
  }

}