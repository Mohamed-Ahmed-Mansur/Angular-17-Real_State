import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private DB_URL="http://localhost:3001/listings"
  private searched_URL="http://localhost:3001/search"
  constructor(private http:HttpClient) {}

  public SearchedArray:any=[];

  getStateByCountry(state:string){
    return this.http.get(`${this.DB_URL}?state=${state}`);
  }
  
  getAllState(){
    return this.http.get(`${this.DB_URL}`);
  }

  postSearchedData(searchedItem: any){
    const myData = this.http.get(this.searched_URL);
    console.log(myData)
    return this.http.post(this.searched_URL, searchedItem);
  }

  getSearchedData(){
    return this.SearchedArray
  }
  
}
