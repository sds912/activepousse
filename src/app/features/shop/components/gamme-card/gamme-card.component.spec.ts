import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeCardComponent } from './gamme-card.component';

describe('GammeCardComponent', () => {
  let component: GammeCardComponent;
  let fixture: ComponentFixture<GammeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GammeCardComponent]
    });
    fixture = TestBed.createComponent(GammeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
