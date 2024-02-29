import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddListingService } from '../../Service/AddListing/add-listing.service';

@Component({
  selector: 'app-card',
  providers: [AddListingService],
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() products: any;
  @Output() deleteElm: EventEmitter<void> = new EventEmitter<void>();

  constructor( private service: AddListingService ) {}

  handleDelete(id: any) {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this student?'
    );

    if(confirmDelete) {
      this.service.deleteListing(id).subscribe({
        next: (data) => {
          console.log(data)
          this.deleteElm.emit();
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
