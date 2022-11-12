import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateCartComponent } from './donate-cart.component';

describe('DonateCartComponent', () => {
  let component: DonateCartComponent;
  let fixture: ComponentFixture<DonateCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonateCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DonateCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
