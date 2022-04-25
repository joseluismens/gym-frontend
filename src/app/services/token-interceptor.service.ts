import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
      let tokenizeReq = req.clone({
        setHeaders:{
            Authorization:`Bearer ${this.authService.getToken()}`
        }
      });
      return next.handle(tokenizeReq);
  }




}
