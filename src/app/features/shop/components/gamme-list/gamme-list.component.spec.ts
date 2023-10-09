import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeListComponent } from './gamme-list.component';

describe('GammeListComponent', () => {
  let component: GammeListComponent;
  let fixture: ComponentFixture<GammeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GammeListComponent]
    });
    fixture = TestBed.createComponent(GammeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
