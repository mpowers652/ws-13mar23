import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../_services/customer.service';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { lastValueFrom } from 'rxjs';
import { Customer } from '../dto/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  private payment:number=0
  constructor(
    private userService:UserService,
    private userAuthService:UserAuthService,
    private router:Router,
    private custService:CustomerService,
    
    private customer:Customer
  ){}

  public runReport() {
    return this.custService.runReport();
  }

  public async makePayment(paymentVal:number) {
    return await lastValueFrom( this.custService.makePayment(this.customer.getId(),paymentVal));
  }
}
