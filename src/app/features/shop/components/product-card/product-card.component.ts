import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() produit: any;

  constructor(private router: Router){

  }



  goToDetails(){
    this.router.navigate(['product/details'])
  }

}
