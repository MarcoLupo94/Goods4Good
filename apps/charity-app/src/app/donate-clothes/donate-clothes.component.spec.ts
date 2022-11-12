import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateClothesComponent } from './donate-clothes.component';

describe('DonateClothesComponent', () => {
  let component: DonateClothesComponent;
  let fixture: ComponentFixture<DonateClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonateClothesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DonateClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
