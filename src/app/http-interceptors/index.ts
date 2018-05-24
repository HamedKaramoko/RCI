
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoggingInterceptorService } from './logging-interceptor.service';
import { AuthorizationInterceptorService } from './authorization-interceptor.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthorizationInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
];
