import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bankaccount } from '../dto/bankaccount';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  bankAccountEndPointUrl:string =`http://localhost:8080/bankaccounts`

  constructor(private http:HttpClient) { }


  save(bankAccount?:Bankaccount){
    return this.http.post(this.bankAccountEndPointUrl,bankAccount)
  }

  findAll(){
    return this.http.get(this.bankAccountEndPointUrl)
  }

  findByCustomerId(customerId:number){
    return this.http.get(this.bankAccountEndPointUrl+`/${customerId}`)
  }

  getAccountAge(customerId:number){
    console.log(`type of customerId =  ${typeof customerId}`)
    return this.http.get(this.bankAccountEndPointUrl+`/accountAge/${customerId}`)
  }
}



  