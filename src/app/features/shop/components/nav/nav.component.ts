import { Component, Input } from '@angular/core';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() categories: any[] = [];
  public cart: any[] = [];

  constructor(private produitService: ProduitService){
    this.produitService.loadCart();
    produitService.cart.subscribe(cart => this.cart = cart);
  }

}
