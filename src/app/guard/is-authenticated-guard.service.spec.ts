import { TestBed, inject } from '@angular/core/testing';

import { IsAuthenticatedGuardService } from './is-authenticated-guard.service';

describe('IsAuthenticatedGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAuthenticatedGuardService]
    });
  });

  it('should be created', inject([IsAuthenticatedGuardService], (service: IsAuthenticatedGuardService) => {
    expect(service).toBeTruthy();
  }));
});
