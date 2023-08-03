import { Component } from '@angular/core';
import { Agent } from '../dto/agent';
import { UserAuthService } from '../_services/user-auth.service';
import { Customer } from '../dto/customer';
import { lastValueFrom } from 'rxjs';
import { AgentService } from '../_services/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  public custList:Customer[];
  constructor(
    private agent:Agent,
    private authService: UserAuthService,
    public paymentVal:Number,
    private service:AgentService
  ){
    this.custList = agent.custList!;
  }

  async makePayment(custId:number, paymentVal:number) {
    return await lastValueFrom(this.service.makePayment(this.agent.userId,custId, paymentVal.valueOf()));
  }

}
