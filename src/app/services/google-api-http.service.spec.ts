import { TestBed } from '@angular/core/testing';

import { GoogleApiHttpService } from './google-api-http.service';

describe('GoogleApiHttpService', () => {
  let service: GoogleApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
