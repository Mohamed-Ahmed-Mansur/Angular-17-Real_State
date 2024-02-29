import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-add-listing',
  standalone: true,
  providers: [AddListingService],
  imports: [HttpClientModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-listing.component.html',
  styleUrl: './add-listing.component.css',
})
export class AddListingComponent implements OnInit {
  constructor(
    private route: Router,
    private listingService: AddListingService,
    private activateRoute: ActivatedRoute
  ) {}

  id: any;
  listings: any;

  ngOnInit(): void {
    if (this.activateRoute.snapshot.params['id']) {
      this.id = this.activateRoute.snapshot.params['id'];
      this.listingService.getById(this.id).subscribe({
        next: (data) => {
          this.listings = data;
          this.myRegValid.patchValue(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  myRegValid = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]),
    price: new FormControl('', [Validators.required]),
    bedrooms: new FormControl('', [Validators.required, Validators.min(1)]),
    bathrooms: new FormControl('', [Validators.required, Validators.min(1)]),
    location: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  url: any = '/assets/images/cloud-arrow-down-fill (1).svg';

  onselectFile(e: any) {
    this.url = e.target.files[0];
  }

  onSubmit() {
    if (this.activateRoute.snapshot.params['id']) {
      const formData = new FormData();
      formData.append('file', this.url);
      this.listingService
        .updateListing(this.id, {
          ...this.myRegValid.value,
          image: this.url.name,
        })
        .subscribe({
          next: (data) => {
            console.log(data);
            this.route.navigateByUrl('yourListing');
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      if (!this.url) {
        console.error('No file selected');
        return;
      }

      const formData = new FormData();
      formData.append('file', this.url);
      console.log(this.url.name);

      if (this.myRegValid.valid) {
        console.log(this.myRegValid.value);
        this.listingService
          .addListing({ ...this.myRegValid.value, image: this.url.name })
          .subscribe();
        this.route.navigateByUrl('yourListing');
      } else {
        console.log('Data is invalid');
      }
    }
  }
}
