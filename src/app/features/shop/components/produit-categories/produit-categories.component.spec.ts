import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCategoriesComponent } from './produit-categories.component';

describe('ProduitCategoriesComponent', () => {
  let component: ProduitCategoriesComponent;
  let fixture: ComponentFixture<ProduitCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProduitCategoriesComponent]
    });
    fixture = TestBed.createComponent(ProduitCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
