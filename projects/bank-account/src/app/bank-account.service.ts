import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from './bank-account';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  private endPointUrl:string = `http://localhost:8081/bank`
  constructor(
    private http:HttpClient
  ) { }

  getAllBankAccount() {
    return this.http.get(this.endPointUrl) //return observable holding account list
  }

  getBankAccountById(acctId:number) {
    return this.http.get(this.endPointUrl + `/${acctId}`) //return observable holding account
  }

  updateAccountById(acctId:number,account:BankAccount ) {
    return this.http.put(this.endPointUrl,account) //return observable holding response
  }

  addAccount(account:BankAccount) {
    return this.http.post(this.endPointUrl,account)
  }

  deleteAccountById(acctId:number) {
    return this.http.delete(this.endPointUrl + `/${acctId}`)
  }

}
