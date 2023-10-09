import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutHeaderCarouselComponent } from './produt-header-carousel.component';

describe('ProdutHeaderCarouselComponent', () => {
  let component: ProdutHeaderCarouselComponent;
  let fixture: ComponentFixture<ProdutHeaderCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutHeaderCarouselComponent]
    });
    fixture = TestBed.createComponent(ProdutHeaderCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
