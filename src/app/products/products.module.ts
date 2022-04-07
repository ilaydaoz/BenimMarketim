import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router"
import {FormsModule } from "@angular/forms";
import { ProductsComponent } from './products.component';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
ProductsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],

})
export class ProductModule { }
