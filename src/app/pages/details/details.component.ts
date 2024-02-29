import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoneyBill, faCoins } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../components/footer/footer.component';
import { AddListingService } from '../../Service/AddListing/add-listing.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from '../../Service/booking.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, FooterComponent, HttpClientModule],
  providers: [AddListingService, BookingService],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  faMoneyBill = faMoneyBill;
  faCoins = faCoins;
  Data: any;
  id = 0;
  constructor(
    myActivated: ActivatedRoute, 
    private myServ: AddListingService, 
    private bookingServ: BookingService, 
    private route: Router
    ) {
    this.id = myActivated.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myServ.getAreaById(this.id).subscribe({
      next:(data)=>{
        console.log(data)
        const [ myobj ]:any = data
        this.Data = myobj;
      },
      error:(err)=>{console.log(err)}
    })
  }
  paymentHandler: any = null;

  handleBook(data: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OpCMsKf4kg8q6qsRco6Ws5iIyyN9rWxq90mb55gtoqw9cXte98aGij84DvlPRxrCLENJEIYbGFl0cC6mqFp8QSC003thpNMyt',
      locale: 'auto',
      token: (stripeToken: any) => { // Use an arrow function here
        console.log(stripeToken);
        // Navigate to the 'bookings' route after payment is completed
        this.route.navigateByUrl('bookings');
      },
    });
    paymentHandler.open({
      name: 'Book now',
      description: 'Aparment booking',
      amount: data.price,
    });

    this.bookingServ.addBooking(data).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        // Stripe Checkout script has been loaded, configure it
        this.paymentHandler = (<any>window)?.StripeCheckout?.configure({
          key: 'pk_test_51OpCMsKf4kg8q6qsRco6Ws5iIyyN9rWxq90mb55gtoqw9cXte98aGij84DvlPRxrCLENJEIYbGFl0cC6mqFp8QSC003thpNMyt',
          locale: 'auto',
          token: (stripeToken: any) => {
            console.log(stripeToken);
            alert('Payment has been successful!');
          },
        });
      };
      window.document.body.appendChild(script);
    } else {
      // If the script is already loaded, configure the Stripe Checkout immediately
      this.paymentHandler = (<any>window)?.StripeCheckout?.configure({
        key: 'pk_test_51OpCMsKf4kg8q6qsRco6Ws5iIyyN9rWxq90mb55gtoqw9cXte98aGij84DvlPRxrCLENJEIYbGFl0cC6mqFp8QSC003thpNMyt',
        locale: 'auto',
        token: (stripeToken: any) => {
          console.log(stripeToken);
          alert('Payment has been successful!');
        },
      });
    }
  }

}
