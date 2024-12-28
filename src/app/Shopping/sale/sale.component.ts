import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  standalone: false,
  
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  constructor() {
    console.log('SaleComponent')
  }

}
