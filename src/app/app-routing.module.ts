import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './Shopping/mens/mens.component';
import { WomenComponent } from './Shopping/women/women.component';
import { KidsComponent } from './Shopping/kids/kids.component';
import { SaleComponent } from './Shopping/sale/sale.component';


const routes: Routes = [
  { path: 'mens', component: MensComponent , children:[
    {path:'tops', component: topsComponent }
  ] },
  { path: 'womens', component:WomenComponent },
  { path: 'kids', component:KidsComponent },
  { path: 'sale', component:SaleComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
