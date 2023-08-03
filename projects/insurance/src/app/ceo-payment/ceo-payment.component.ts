import { Component } from '@angular/core';
import { Customer } from '../dto/customer';
import { Ceo } from '../dto/ceo';
import { BranchService } from '../_services/branch.service';
import { BranchPaymentComponent } from '../branch-payment/branch-payment.component';
import { BranchMan } from '../dto/branch-man';
import { lastValueFrom } from 'rxjs';
import { CeoService } from '../_services/ceo.service';

@Component({
  selector: 'app-ceo-payment',
  templateUrl: './ceo-payment.component.html',
  styleUrls: ['./ceo-payment.component.css']
})
export class CeoPaymentComponent {

  public custList:Customer[] = []
  public tempList:Customer[] = []
  public paymentVal: number = 0;
  constructor(
    public ceo:Ceo,
    public branchPayment:BranchPaymentComponent, 
    public service:CeoService
    
  ){
    this.loadCustList()
  }

  /**
   * loadCustList
   */
  public async loadCustList() {
    let branch:BranchMan
    for (branch of this.ceo.branches!) {
      this.tempList = await this.branchPayment.getCustomers(branch.userId)
      let cust:Customer
      for (cust of this.tempList!) {
        this.custList!.push(cust)
      }
    }
  }

  async makePayment(custId: number) {
    let paymentMade:boolean = false
    paymentMade = await lastValueFrom(this.service!.makePayment(custId, this.paymentVal))
    return paymentMade
  }
}
