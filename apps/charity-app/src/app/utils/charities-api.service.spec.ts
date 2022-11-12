import { TestBed } from '@angular/core/testing';

import { CharitiesApiService } from './charities-api.service';

describe('CharitiesApiService', () => {
  let service: CharitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
