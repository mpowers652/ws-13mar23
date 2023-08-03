import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Bankaccount } from '../dto/bankaccount';
import { BankAccountService } from '../_services/bank-account.service';

@Component({
  selector: 'app-show-all-accounts',
  templateUrl: './show-all-accounts.component.html',
  styleUrls: ['./show-all-accounts.component.css']
})
export class ShowAllAccountsComponent implements OnInit {
  allAccounts:Bankaccount[]=[]
  constructor(private service: BankAccountService,
    private router:Router) { }

  ngOnInit(): void {
    this.findAll()
  }
  async findAll(){
    this.allAccounts= await lastValueFrom(this.service.findAll() ) as Bankaccount[]

  }
  findAccount(actNumber?:number){

  }
  deleteAccount(account?: number){
    
  }
}
