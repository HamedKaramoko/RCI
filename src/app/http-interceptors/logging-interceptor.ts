import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { finalize } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Request sent at : ', new Date().toLocaleString());
        return next.handle(req).pipe(
            finalize(() => {
                console.log('Response received at : ', new Date().toLocaleString());
            })
        );
    }
}
