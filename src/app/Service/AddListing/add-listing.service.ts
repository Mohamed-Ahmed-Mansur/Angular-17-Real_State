import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddListingService {
  private myDB = 'http://localhost:3001/added';
  private listingsDB = 'http://localhost:3001/listings';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.myDB);
  }

  getById(id: any) {
    return this.http.get(`${this.myDB}/${id}`);
  }

  addListing(listing: any) {
    return this.http.post(this.myDB, listing);
  }

  updateListing(id: any, body: any) {
    return this.http.patch(`${this.myDB}/${id}`, body);
  }

  deleteListing(id: any) {
    return this.http.delete(`${this.myDB}/${id}`);
  }

  GellAllareas(){
    return this.http.get(this.listingsDB)
  }
  GellAllareasbyid(state:any){
    return this.http.get(this.listingsDB+'?state='+state)
  }
}
