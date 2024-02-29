import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, FooterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  faMoneyBill = faMoneyBill;
  faCoins = faCoins;
  Data = {
    "id": "1",
    "title": "Modern Apartment in Downtown",
    "description": "Beautiful modern apartment located in the heart of downtown. Close to restaurants, shops, and public transportation.",
    "price": "$2000",
    "bedrooms": 2,
    "bathrooms": 1,
    "sqft": 1000,
    "location": "103 Wright Court Burien, NY 98168",
    "state": "NY",
    "image": "https://source.unsplash.com/featured/?apartment",
    "category": "Popular"
  }
  handleClick() {
    document.getElementById("myDiv");
  }
}
