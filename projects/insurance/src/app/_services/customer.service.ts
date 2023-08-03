import { Injectable } from '@angular/core';
import { Customer } from '../dto/customer';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url:String = 'http://localhost:8080/api/customer'
  private jwtToken:HttpHeaders = new HttpHeaders(this.userAuthService.getToken())
  
  makePayment(custId:number,paymentVal:number) {
    return this.http.post(this.url + `/${custId}`,paymentVal,{headers:this.jwtToken})
  }
  runReport() {
    this.router.navigate(['report'])
  }

  constructor(
    private customer: Customer,
    private router: Router,
    private userService: UserService,
    private http:HttpClient,
    private userAuthService:UserAuthService
  ) {
   }
}
