import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthModule, AuthService } from '@auth0/auth0-angular';

import { DonateClothesComponent } from './donate-clothes.component';

describe('DonateClothesComponent', () => {
  let component: DonateClothesComponent;
  let fixture: ComponentFixture<DonateClothesComponent>;
  let authServiceStub: Partial<AuthService>;

  authServiceStub = async () => {
    return {
      auth: null,
      currentUser: null,
      http: null,
      user: null
    };
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonateClothesComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, AuthModule],
      providers: [{ provide: AuthService, useValue: authServiceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(DonateClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
