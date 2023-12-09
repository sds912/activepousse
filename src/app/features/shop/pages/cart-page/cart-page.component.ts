import { Component } from '@angular/core';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  public products: any [] = [];

  constructor(private produitService: ProduitService){
    produitService.loadCart();
    produitService.cart.subscribe(cart => this.products = cart)
  }

  getTotal(): number {
    let total = 0;
    this.products.map(p => total += p.price);
    return total;
  }

  remove(product: any){
    this.produitService.removeProductFromCard(product);
  }

}
