import { Component, Input } from '@angular/core';
import { Agent } from '../dto/agent';
import { BranchMan } from '../dto/branch-man';

@Component({
  selector: 'app-branchReport',
  templateUrl: './branch-report.component.html',
  styleUrls: ['./branch-report.component.css']
})
export class BranchReportComponent {
  @Input() branchMan:BranchMan|undefined = undefined
  public agentList:Agent[]
  constructor(){
    this.agentList = this.branchMan!.branchAgents!
  }
}
