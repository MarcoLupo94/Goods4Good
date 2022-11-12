import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityPageComponent } from './charity-page.component';

describe('CharityPageComponent', () => {
  let component: CharityPageComponent;
  let fixture: ComponentFixture<CharityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharityPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
