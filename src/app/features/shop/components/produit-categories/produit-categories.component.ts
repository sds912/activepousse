import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produit-categories',
  templateUrl: './produit-categories.component.html',
  styleUrls: ['./produit-categories.component.scss']
})
export class ProduitCategoriesComponent {

  @Input() categories?: any[]

}
