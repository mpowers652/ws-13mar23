import { Component } from '@angular/core';
import { BranchMan } from '../dto/branch-man';
import { UserAuthService } from '../_services/user-auth.service';
import { Agent } from '../dto/agent';
import { Customer } from '../dto/customer';
import { BranchService } from '../_services/branch.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-branch-payment',
  templateUrl: './branch-payment.component.html',
  styleUrls: ['./branch-payment.component.css']
})
export class BranchPaymentComponent {
  async makePayment(custId: number) {
    let paymentMade = false
    paymentMade = await lastValueFrom(this.service!.makePayment(this.branch!.userId, custId, this.paymentVal))
    return paymentMade
  }

  public custList: Customer[] | undefined
  paymentVal: number = 0;

  public async loadCustomers() {
    this.custList! = await this.getCustomerList()
  }

  public async getCustomerList() {
    return await lastValueFrom(this.service!.findAllCustomers(this.branch!.userId)) as Customer[]
  }

  public async getCustomers(branchId:number) {
    return await lastValueFrom(this.service!.findAllCustomers(branchId)) as Customer[]
  }

  constructor(
    public branch?: BranchMan,
    public authService?: UserAuthService,
    public service?: BranchService,
    public agent?: Agent,
    public customer?: Customer,
    //public agentList?:Agent[]

  ) {

  }


}
