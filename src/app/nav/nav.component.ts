import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  isMenuOpen = false;

  constructor(private router: Router){};

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(event: Event){
    this.isMenuOpen = false;
    event.stopPropagation(); // Prevent the event from bubbling up to the li
  }

  navigate(route:string){
    this.router.navigate([route]);
    this.isMenuOpen = false;
  }
}
