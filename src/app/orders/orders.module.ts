import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { OrdersComponent } from './orders.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    declarations: [
  OrdersComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      BrowserModule,
     
    ],
    providers: [],
  
  })
  export class OrdersModule  { }
  