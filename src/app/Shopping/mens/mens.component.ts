import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  standalone: false,
  
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.scss'
})
export class MensComponent {
 constructor(private router:Router) {
  
 };

  navigateToTops() {
    this.router.navigate(['mens/tops'])
  }

  navigateToBottoms() {
    this.router.navigate(['mens/bottoms'])
  }

  navigateToCoats() {
    this.router.navigate(['mens/coats'])
  }
}
