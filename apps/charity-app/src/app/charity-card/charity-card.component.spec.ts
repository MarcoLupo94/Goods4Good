import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityCardComponent } from './charity-card.component';

describe('CharityCardComponent', () => {
  let component: CharityCardComponent;
  let fixture: ComponentFixture<CharityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharityCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
