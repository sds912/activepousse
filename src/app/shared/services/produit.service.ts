import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
 
  public cart: BehaviorSubject<any>  = new BehaviorSubject<any>([]);

  constructor() { }

public  addProductToCard(product: any): void{
    let products: any[] = [];
    const localStorageData = localStorage.getItem('cart');
    if(localStorageData !== null){
      products = JSON.parse(localStorageData!)
    }
    products.push(product);
    localStorage.setItem('cart',JSON.stringify(products));
    this.cart.next(products)
  }

  public  removeProductFromCard(product: any): void{
    let products: any[] = [];
    const localStorageData = localStorage.getItem('cart');
    if(localStorageData !== null){
      products = JSON.parse(localStorageData!)
    }
    products.filter(p => p.id !== product?.id);
    localStorage.setItem('cart',JSON.stringify(products));
    this.cart.next(products)
  }

  loadCart(){
    const p = localStorage.getItem('cart');
    if(p){
      this.cart.next(JSON.parse(p!));
    }
  }

}
