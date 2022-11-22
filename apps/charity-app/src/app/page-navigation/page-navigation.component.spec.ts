import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PageNavigationComponent } from './page-navigation.component';

describe('PageNavigationComponent', () => {
  let component: PageNavigationComponent;
  let fixture: ComponentFixture<PageNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNavigationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PageNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test', () => {
    expect(true).toEqual(true);
  });

  // Component should render
  // it('should render the component', () => {
  //   const fixture = TestBed.createComponent(PageNavigationComponent);
  //   fixture.detectChanges();
  // });

  // Should change the view
  // it('should change view', () => {
  //   const { debugElement } = fixture;
  //   // Act: Click on the navigation button
  //   // Find it:
  //   const navBtn = debugElement.query(By.css('[data-testid="page-nav-btn"]'));
  //   // Click it:
  //   // No need to pass callback as the function specified for click in the template does not use the event object (backClicked(), not backClicked(event))
  //   navBtn.triggerEventHandler('click', null);

  //   fixture.detectChanges();

  //   // Assert: Expect that the displayed view has now changed
  //   // Find it:
  //   const pageName = debugElement.query(By.css('[data-testid="page-name"]'));
  //   expect(pageName.nativeElement.textContent).toBe('');
  // });

  // Should receive a "PageName" @Input

  // This input should be of type string

  // Should take the user back in navigation when the user clicks it
});
