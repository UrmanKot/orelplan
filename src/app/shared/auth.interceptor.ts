import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../admin/services/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authService.isAuthentificated()) {
      req = req.clone({
        setParams: {
          // @ts-ignore
          auth: this.authService.token
        }
      });
    }
    return next.handle(req)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
            console.log('[Interceptor Error]: ', error);

            if (error.status === 401) {
              this.authService.logout();
              this.router.navigate(['/arh-admin', 'login'], {
                queryParams: {
                  authFailed: true
                }
              }).then();
            }
            return throwError(error);
        })
      );
  }

}
