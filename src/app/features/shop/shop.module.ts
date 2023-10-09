import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { PaiementPageComponent } from './pages/paiement-page/paiement-page.component';
import { ShopRoutingModule } from './shop-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProdutHeaderCarouselComponent } from './components/produt-header-carousel/produt-header-carousel.component';
import { CategorieProduitCarouselComponent } from './components/categorie-produit-carousel/categorie-produit-carousel.component';
import { ProduitCategoriesComponent } from './components/produit-categories/produit-categories.component';
import { GammeListComponent } from './components/gamme-list/gamme-list.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    AboutUsComponent,
    ProductCardComponent,
    ProductListComponent,
    ContactUsComponent,
    ContactPageComponent,
    ProductDetailsPageComponent,
    HomePageComponent,
    PaiementPageComponent,
    ProdutHeaderCarouselComponent,
    CategorieProduitCarouselComponent,
    ProduitCategoriesComponent,
    GammeListComponent,
    CartPageComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
