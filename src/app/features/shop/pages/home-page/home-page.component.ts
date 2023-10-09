import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public data: any;

  constructor(private productService: ProductService){
      this.productService.getProducts().subscribe(
        (response) => {
          this.data = response;
        }
      )
  }

}
