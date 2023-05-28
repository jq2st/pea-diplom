import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getToken()
    
        const authReq = req.clone({
            headers: req.headers.set('authorization', token),
        })

        return next.handle(authReq).pipe(
            tap(
                (event) => {
                    if (event instanceof HttpResponse)
                        console.log('Server response')
                    },
                    (err) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status == 401)
                        console.error(err)
                    }
                }
            )
        )
    }
}