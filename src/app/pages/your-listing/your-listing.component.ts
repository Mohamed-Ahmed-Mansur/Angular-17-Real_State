import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { AddListingService } from '../../Service/AddListing/add-listing.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-your-listing',
  standalone: true,
  providers: [AddListingService],
  imports: [CardComponent, HttpClientModule, RouterModule],
  templateUrl: './your-listing.component.html',
  styleUrl: './your-listing.component.css',
})
export class YourListingComponent implements OnInit {
  constructor(private service: AddListingService) {}

  products: any = [];

  ngOnInit(): void {
    this.getData();
  }

  // products = [{
  //   "id": "1",
  //   "title": "Modern Apartment in Downtown",
  //   "description": "Beautiful modern apartment located in the heart of downtown. Close to restaurants, shops, and public transportation.",
  //   "price": "$2000",
  //   "bedrooms": 2,
  //   "bathrooms": 1,
  //   "sqft": 1000,
  //   "location": "103 Wright Court Burien, NY 98168",
  //   "state": "NY",
  //   "image": "https://source.unsplash.com/featured/?apartment",
  //   "category": "Popular"
  // }];

  getData() {
    this.service.getAll().subscribe({
      next: (data) => {
        console.log(data);
        return (this.products = data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
