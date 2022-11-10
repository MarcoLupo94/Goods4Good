import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateCashComponent } from './donate-cash.component';

describe('DonateCashComponent', () => {
  let component: DonateCashComponent;
  let fixture: ComponentFixture<DonateCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonateCashComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DonateCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
