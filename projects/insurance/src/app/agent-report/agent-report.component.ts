import { Component, Input } from '@angular/core';
import { Agent } from '../dto/agent';
import { UserAuthService } from '../_services/user-auth.service';
import { Customer } from '../dto/customer';

@Component({
  selector: 'app-agentReport',
  templateUrl: './agent-report.component.html',
  styleUrls: ['./agent-report.component.css']
})
export class AgentReportComponent {
  @Input() public agent:Agent|undefined = undefined
  public custList:Customer[]
  constructor(){
    this.custList = this.agent!.getCustList();
  }
}
