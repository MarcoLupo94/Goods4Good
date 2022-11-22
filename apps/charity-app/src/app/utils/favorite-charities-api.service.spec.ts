import { TestBed } from '@angular/core/testing';

import { FavoriteCharitiesApiService } from './favorite-charities-api.service';

describe('FavoriteCharitiesApiService', () => {
  let service: FavoriteCharitiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteCharitiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
