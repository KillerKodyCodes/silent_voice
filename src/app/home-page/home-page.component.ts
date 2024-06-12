import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactFormComponent } from '../contact-form/contact-form.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, ContactFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
