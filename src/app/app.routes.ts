import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { YourListingComponent } from './pages/your-listing/your-listing.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SelectdataComponent } from './pages/selectdata/selectdata.component';
import { ListingComponent } from './pages/listing/listing.component';
import { DetailsComponent } from './pages/details/details.component';
import { FavListingComponent } from './pages/fav-listing/fav-listing.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { StateDetailsComponent } from './pages/state-details/state-details.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'details/:state/:bedrooms/:category', component: StateDetailsComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'addListing', component: AddListingComponent },
    { path: 'addListing/:id', component: AddListingComponent },
    { path: 'yourListing', component: YourListingComponent },
    { path: 'ContactUs', component: ContactUsComponent },
    { path: 'Selectdata/:state', component: SelectdataComponent },
    { path: 'Selectdata', component: SelectdataComponent },
    { path: 'listing', component: ListingComponent },
    { path: 'favListing', component: FavListingComponent },
    { path: 'bookings', component: MyBookingComponent },
    { path: 'login', component: LoginComponent },
];
