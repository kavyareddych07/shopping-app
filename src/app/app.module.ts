import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MensComponent } from './Shopping/mens/mens.component';
import { WomenComponent } from './Shopping/women/women.component';
import { KidsComponent } from './Shopping/kids/kids.component';
import { SaleComponent } from './Shopping/sale/sale.component';
import { BottomComponent } from './Shopping/mens/bottom/bottom.component';
import { TopsComponent } from './Shopping/mens/tops/tops.component';
import { CoatsComponent } from './Shopping/mens/coats/coats.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from '../tvShowRoomDetails/model/model.component';
import { ColorComponent } from '../tvShowRoomDetails/color/color.component';
import { DisplayComponent } from '../tvShowRoomDetails/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    MensComponent,
    WomenComponent,
    KidsComponent,
    SaleComponent,
    BottomComponent,
    TopsComponent,
    CoatsComponent,
    HeaderComponent,
    ModelComponent,
    ColorComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
