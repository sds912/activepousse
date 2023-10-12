import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public data: any;

  constructor(private productService: ProductService){
      this.productService.getProducts().subscribe(
        (response) => {
          this.data = response;
        }
      )
  }


}
