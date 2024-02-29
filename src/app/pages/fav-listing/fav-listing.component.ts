import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-fav-listing',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  providers: [AddListingService],
  templateUrl: './fav-listing.component.html',
  styleUrl: './fav-listing.component.css',
})
export class FavListingComponent implements OnInit {
  products: any;
  constructor(
    private listingService: AddListingService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.listingService.GellAllareas().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  addToFavorites(product: any) {
    if (product.Favourite) {
      this.listingService
        .updateAllListing(product.id, {
          ...product,
          Favourite: false,
        })
        .subscribe({
          next: (data) => {
            this.getData();
          },
        });
    } else {
      this.listingService
        .updateAllListing(product.id, {
          ...product,
          Favourite: true,
        })
        .subscribe({
          next: (data) => {
            this.getData();
          },
        });
    }
  }
}
