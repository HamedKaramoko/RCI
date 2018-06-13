import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationGuardService } from './authentication-guard.service';

xdescribe('AuthenticationGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationGuardService]
    });
  });

  it('should be created', inject([AuthenticationGuardService], (service: AuthenticationGuardService) => {
    expect(service).toBeTruthy();
  }));
});
