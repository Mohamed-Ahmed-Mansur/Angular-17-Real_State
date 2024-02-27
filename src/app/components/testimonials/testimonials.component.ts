import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Amanda Smith',
      body: "I can't recommend this website enough! It made my apartment hunt a breeze. The detailed listings and intuitive search filters helped me narrow down my options quickly. Plus, the seamless communication with the landlords made the whole renting process hassle-free.",
      img: '/assets/images/fleur-kaan-pyrJHb1QTRA-unsplash.jpg'
    },
    {
      name: 'Jesse Pinkman',
      body: "Renting through this website was a breeze! From start to finish, the process was smooth and efficient. The platform's user-friendly interface and screen made it easy to find the perfect home, and the responsive support team ensured all my queries were promptly addressed.",
      img: '/assets/images/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg'
    },
    {
      name: 'Walter White',
      body: "My experience with this website exceeded all expectations. The extensive range of listings catered to my specific preferences, and the informative descriptions helped me make informed decisions. Thanks to their exceptional service, I found my ideal rental in no time!",
      img: '/assets/images/vinicius-amnx-amano-0NCjjD0zGnw-unsplash.jpg'
    },
  ];
}
