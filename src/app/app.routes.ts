import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StateDetailsComponent } from './components/state-details/state-details.component';
import { AddListingComponent } from './pages/add-listing/add-listing.component';
import { YourListingComponent } from './pages/your-listing/your-listing.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: StateDetailsComponent },
    { path: 'addListing', component: AddListingComponent },
    { path: 'addListing/:id', component: AddListingComponent },
    { path: 'yourListing', component: YourListingComponent },
    { path: 'ContactUs', component: ContactUsComponent }
];
