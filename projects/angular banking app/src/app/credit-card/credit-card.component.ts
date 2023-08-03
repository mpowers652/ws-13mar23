import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../dto/bankaccount';
import { Customer } from '../dto/customer';
import { Offers } from '../dto/offers';
import { BankAccountService } from '../_services/bank-account.service';
import { CustomerService } from '../_services/customer.service';
import { OffersService } from '../_services/offers.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  // get the customerId from the route
  customerId: number = 0
  customer: Customer = new Customer()
  bankAccount: Bankaccount = new Bankaccount()
  actAge: number = 0
  creditCardInterestRate: number = 0
  creditCardInterestFreeCash: number = 0
  creditCardAnnualFee: number = 0
  



  constructor(private userAuthService: UserAuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private accountService: BankAccountService,
    private offerService: OffersService) { }

  ngOnInit(): void {
    this.customerId = this.userAuthService.getCustomerId()
    this.getAccountAge()
    this.findCustomerAndAccountByCustomerId()
   
   
  }

  async applyForCreditCard() {
    let offers:Offers = new Offers(
                          undefined,
                          'CREDIT CARD',
                          undefined,
                          this.creditCardInterestRate,
                          this.creditCardInterestFreeCash,
                          this.creditCardAnnualFee,
                          undefined,
                          this.customerId)
    await lastValueFrom(this.offerService.saveOffer(offers))                            
    this.router.navigateByUrl('/user/viewoffers')                  
  }

  async findCustomerAndAccountByCustomerId() {
    this.customer = await lastValueFrom(this.customerService.findById(this.customerId)) as Customer
    this.bankAccount = await lastValueFrom(this.accountService.findByCustomerId(this.customerId)) as Bankaccount
    this.calculateOfferDetails()
    /* console.log(`findCustomerAndAccountByCustomerId() customerId = ${this.customerId}`)
    console.log(`findCustomerAndAccountByCustomerId() this.customer.customerId = ${this.customer.customerId}`)   
    console.log(`findCustomerAndAccountByCustomerId() this.bankAccount.customer.customerId = ${this.bankAccount!.customer!.customerId}`)    */
  }

  async getAccountAge() {
    this.actAge = await lastValueFrom(this.accountService.getAccountAge(this.customerId)) as number
   
  }

  calculateOfferDetails() {
    if (this.bankAccount.actBalance! >= 10000) {
      this.creditCardAnnualFee = 50
    } else if (this.bankAccount.actBalance! >= 5000) {
      this.creditCardAnnualFee = 60
    }

    if (this.actAge >= 10) {
      this.creditCardInterestRate = 6
    } else if (this.actAge >= 5) {
      this.creditCardInterestRate = 7
    }

    if (this.bankAccount.actBalance! >= 10000 && this.actAge >= 10) {
      this.creditCardInterestFreeCash = 1000
    } else if (this.bankAccount.actBalance! >= 5000 && this.actAge >= 5) {
      this.creditCardInterestFreeCash = 500
    }
  }


}