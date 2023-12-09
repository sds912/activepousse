import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() produit: any;

  constructor(private router: Router, private productService: ProduitService){

  }



  goToDetails(){
    this.router.navigate(['product/details'])
  }

  addToCart(product: any){
    this.productService.addProductToCard(product);
  }

}
