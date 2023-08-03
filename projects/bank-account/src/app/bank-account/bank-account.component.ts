import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'projects/2-binding-directives-product-app/src/app/product';
import { lastValueFrom } from 'rxjs';
import { BankAccount } from '../bank-account';
import { BankAccountService } from '../bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit, OnChanges{


  public accounts?:BankAccount[]
  public account:BankAccount = new BankAccount() //associated with form
  public isUpdating:boolean = false
  isFormSubmitted: boolean = false;

  constructor(
    
    private bankService?:BankAccountService
    
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    this.findAllAccount()
    console.log(`change occurred`)
  }
  ngOnInit(): void {
    this.findAllAccount()
  }



  async findAllAccount() {
    this.accounts = await lastValueFrom(this.bankService?.getAllBankAccount()!) as BankAccount[]
  }

  async findBankAccountById(acctNum:number) {
    this.account= await lastValueFrom(this.bankService?.getBankAccountById(acctNum)!) as BankAccount
  }

  async addOrUpdateBankAccount(account: BankAccount, isUpdating:boolean, acctId:number) {
    if (isUpdating) {
      isUpdating = false
      return await lastValueFrom(this.bankService?.updateAccountById(acctId,account)!) as BankAccount
    } else {
      return await lastValueFrom(this.bankService?.addAccount(account)!) as BankAccount
    }
  }

  async deleteAcctById(acctId:number) {
    await lastValueFrom(this.bankService?.deleteAccountById(acctId)!)
  }

  async submitForm(productForm: NgForm) {
    this.isFormSubmitted = true
    //if(productForm.valid) {
    //the code to submit such as adding to the db
    // if (!this.isUpdating) {
    //   this.product!.prodId! = this.products?.at(this.products.length-1)?.prodId! +1
    // }
    this.account = this.addOrUpdateBankAccount(this.account,this.isUpdating,this.account.actNumber!) as BankAccount
    
    this.isUpdating = false;
    this.findAllAccount()
    this.account = new BankAccount()
    productForm.reset()
    this.isFormSubmitted = false

  }

}
