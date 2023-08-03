import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../dto/bankaccount';
import { Customer } from '../dto/customer';
import { BankAccountService } from '../_services/bank-account.service';
import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.css']
})

export class AccountProfileComponent implements OnInit {

  customer:Customer=new Customer()
  bankAccount:Bankaccount  = new Bankaccount()
  customerId:number=0
  constructor(private customeService: CustomerService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private accountService: BankAccountService) { }

  ngOnInit(): void {
    this.customerId = parseInt(this.activatedRoute.snapshot.params['customerId'])
    this.findById()
  }

  async findById(){
    this.customer =  await lastValueFrom(this.customeService.findById(this.customerId)) as Customer
    this.bankAccount = await lastValueFrom(this.accountService.findByCustomerId(this.customerId))   
  }

}
