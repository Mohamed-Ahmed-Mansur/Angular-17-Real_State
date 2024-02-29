import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutComponent } from '../../components/about/about.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LandingComponent } from '../../components/landing/landing.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LatestListedComponent } from '../../components/latest-listed/latest-listed.component';
import { AreasComponent } from '../../components/areas/areas.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, AboutComponent, NavbarComponent, LandingComponent, AreasComponent, TestimonialsComponent, LatestListedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
