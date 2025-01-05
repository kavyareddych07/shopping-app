import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
  constructor(private router:Router) {
    
   };
  
  navigateToMens() {
    this.router.navigate(['mens'])
  }

  navigateToWomens() {
    this.router.navigate(['womens'])

  }
  navigateTo(pathTo: string){
    this.router.navigate([pathTo])
  }


}
