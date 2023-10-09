import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementPageComponent } from './paiement-page.component';

describe('PaiementPageComponent', () => {
  let component: PaiementPageComponent;
  let fixture: ComponentFixture<PaiementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaiementPageComponent]
    });
    fixture = TestBed.createComponent(PaiementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
