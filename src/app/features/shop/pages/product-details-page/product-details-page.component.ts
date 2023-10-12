import { Component, ElementRef, ViewChild } from '@angular/core';
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
  public quantite = 1;
  constructor(private route: ActivatedRoute, private productService: ProductService){
    this.scrollToTop();

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(r =>{
      this.productService.getProducts()
      .subscribe((response: any) =>{
        const products: any[] = response!.products;
       this.relatedProducts = products;
        products!.forEach(p => {
          if(p.id == r.get('id')){
            this.produit = p;
          }
        })
      })
    })

    
  }

  scrollToTop() {
    window.scrollTo(0,0)
  }

  decrease(){
    if(this.quantite > 1){
      this.quantite -= 1;
    }
  }

  increase(){
    this.quantite += 1;
  }

}
