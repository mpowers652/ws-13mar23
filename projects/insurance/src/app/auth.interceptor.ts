import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserAuthService } from './_services/user-auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userAuthService:UserAuthService,
    private router:Router) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.get('No-Auth') === 'True') {
      return next.handle(request.clone())
    }
    const token = this.userAuthService.getToken()
    request = this.addToken(request, token);
    
    return next.handle(request).pipe(
      catchError(
        (err:HttpErrorResponse)=> {
          console.log(err.status);
          if(err.status === 401) {
            this.router.navigate(['/login'])
          } else if(err.status === 403) {
            this.router.navigate(['/forbidden'])
          }
          return throwError('Something is wrong');
        }
      )
    );
  }

  private addToken(request:HttpRequest<any>, token:string) {
    let head: HttpHeaders = new HttpHeaders()
    head.set('Authorization', `Bearer ${token}`)

    return request.clone(
      {
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      })

  }
}
