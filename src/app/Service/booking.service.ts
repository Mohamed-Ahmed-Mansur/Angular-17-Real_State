import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private myDB = 'http://localhost:3001/booking';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.myDB);
  }

  addBooking(listing: any) {
    return this.http.post(this.myDB, listing);
  }
}