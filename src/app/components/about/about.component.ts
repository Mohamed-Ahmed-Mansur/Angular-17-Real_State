import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule
  ],
  templateUrl:'./about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}



