import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitCarouselComponent } from './categorie-produit-carousel.component';

describe('CategorieProduitCarouselComponent', () => {
  let component: CategorieProduitCarouselComponent;
  let fixture: ComponentFixture<CategorieProduitCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieProduitCarouselComponent]
    });
    fixture = TestBed.createComponent(CategorieProduitCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
