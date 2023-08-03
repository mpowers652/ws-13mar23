import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../dto/bankaccount';
import { Customer } from '../dto/customer';
import { BankAccountService } from '../_services/bank-account.service';
import { CustomerService } from '../_services/customer.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
// get the customerId from the route
customerId:number=0
customer:Customer = new Customer()
bankAccount:Bankaccount = new Bankaccount()


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showCreditCardOffer(){
    this.router.navigateByUrl('/user/creditcard/')
  }
  showHomeLoanOffer(){
    this.router.navigateByUrl('/homeloan')
  }
  showCarLoanOffer(){
    this.router.navigateByUrl('/carloan')
  }

 


}
