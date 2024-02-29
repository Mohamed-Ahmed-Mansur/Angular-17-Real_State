import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  public sendEmail() {
    const templateParams = {
      name: this.name, // Sender's name
      email: this.email, // Sender's email
      subject: this.subject,
      message: this.message,
      to_email: 'recipient@example.com', // Recipient's email
    };
    emailjs
      .send('service_q4wqgaa', 'template_yovkzln', templateParams, {
        publicKey: 'SG1rXVywNAqmxp6X6',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }
}
