import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CharityPageComponent } from './charity-page.component';

describe('CharityPageComponent', () => {
  let component: CharityPageComponent;
  let fixture: ComponentFixture<CharityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharityPageComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CharityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
