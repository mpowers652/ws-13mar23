import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  message:any;
  customerId:number=0
  customerEndPointurl:string = 'http://localhost:8080/customers'
  constructor(private userService: UserService,
    private userAuthService: UserAuthService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.customerId=this.userAuthService.getCustomerId()
  }

  findById(customerId:number){
    return this.http.get(this.customerEndPointurl+`/${customerId}`)
  }


}
