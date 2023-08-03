import { Component, Input } from '@angular/core';
import { Customer } from '../dto/customer';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-custReport',
  templateUrl: './custReport.component.html',
  styleUrls: ['./custReport.component.css']
})
export class ReportComponent {
  @Input() customer:Customer|undefined = undefined
  private paymentList:Date[]|undefined

  constructor(){
    this.paymentList = this.customer!.getPreviousPayments();
  }
  get getPaymentList() {
    return this.paymentList
  }
  
}
