import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../Service/booking.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-booking',
  standalone: true,
  providers: [BookingService],
  imports: [HttpClientModule],
  templateUrl: './my-booking.component.html',
  styleUrl: './my-booking.component.css',
})
export class MyBookingComponent implements OnInit {
  constructor(private myService: BookingService) {}
  ngOnInit(): void {
    this.bookingData();
  }

  stateSearched:any;

  bookingData() {
    this.myService.getAll().subscribe({
      next: (data) => {
        return this.stateSearched = data; 
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
