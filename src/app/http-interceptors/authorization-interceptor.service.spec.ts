import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationInterceptorService } from './authorization-interceptor.service';

xdescribe('AuthorizationInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationInterceptorService]
    });
  });

  it('should be created', inject([AuthorizationInterceptorService], (service: AuthorizationInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
