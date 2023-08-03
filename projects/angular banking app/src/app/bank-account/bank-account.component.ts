import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../dto/bankaccount';
import { Customer } from '../dto/customer';
import { BankAccountService } from '../_services/bank-account.service';

@Component({
  selector: 'app-bankaccount',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankaccountComponent implements OnInit {
  customer?:Customer = new Customer()

  bankAccount?:Bankaccount = new Bankaccount(undefined,undefined,undefined,undefined,this.customer)
  constructor(private service:BankAccountService) { }

  ngOnInit(): void {
  }

  async save(bankAccountForm:any){
  // this.bankAccount!.actCreationDate="2010-10-16" 
  this.bankAccount!.actCreationDate = new Date()
  console.log(`Act Number ${this.bankAccount!.actNumber}`)
  console.log(`Act Creation Date ${this.bankAccount!.actCreationDate}`)
  console.log(`Act customer id ${this.bankAccount!.customer!.customerId}`)
  console.log(`First name ${this.bankAccount!.customer!.firstname}`)
  console.log(`Last name ${this.bankAccount!.customer!.lastname}`)
  console.log(`City  ${this.bankAccount!.customer!.city}`)
  console.log(`Phone ${this.bankAccount!.customer!.phone}`)
  console.log(`Act type ${this.bankAccount!.actType}`)
  console.log(`Act balance ${this.bankAccount!.actBalance}`)
  this.bankAccount = await  lastValueFrom(this.service.save(this.bankAccount)) as Bankaccount
  console.log(`Act Number ${this.bankAccount!.actNumber}`)
  console.log(`Act Creation Date ${this.bankAccount!.actCreationDate}`)
  console.log(`Act customer id ${this.bankAccount!.customer!.customerId}`)
  console.log(`First name ${this.bankAccount!.customer!.firstname}`)
  console.log(`Last name ${this.bankAccount!.customer!.lastname}`)
  console.log(`City  ${this.bankAccount!.customer!.city}`)
  console.log(`Phone ${this.bankAccount!.customer!.phone}`)
  console.log(`Act type ${this.bankAccount!.actType}`)
  console.log(`Act balance ${this.bankAccount!.actBalance}`)
  this.customer = new Customer()

  this.bankAccount = new Bankaccount(undefined,undefined,undefined,undefined,this.customer)
  }

 
}
