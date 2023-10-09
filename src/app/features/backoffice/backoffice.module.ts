import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';



@NgModule({
  declarations: [
    BackofficeComponent,
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
