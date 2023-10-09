import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent {

  public produit: any;
  public relatedProducts: any[] = [];
  constructor(private route: ActivatedRoute, private productService: ProductService){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(r =>{
      this.productService.getProducts()
      .subscribe((response: any) =>{
        const products: any[] = response!.products;
        console.log(products)

       this.relatedProducts = products;
        products!.forEach(p => {
          if(p.id == r.get('id')){

            this.produit = p;
            console.log(p)
          }
        })
      })
    })
  }

}
