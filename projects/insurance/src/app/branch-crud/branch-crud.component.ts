import { Component, OnInit } from '@angular/core';
import { last, lastValueFrom } from 'rxjs';
import { BranchService } from '../_services/branch.service';
import { Agent } from '../dto/agent';
import { BranchMan } from '../dto/branch-man';
import { Customer } from '../dto/customer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branch-crud',
  templateUrl: './branch-crud.component.html',
  styleUrls: ['./branch-crud.component.css']
})
export class BranchCRUDComponent implements OnInit {
  async calculateCommission(agentId:number) {
  return await lastValueFrom(this.service!.calculateCommission(this.branch!.userId!,agentId))
}
deleteCustomer(custId:number) {
  this.service!.deleteCustomer(this.branch!.userId!, custId)
}
  isNotAgent(): any {
    return !(this.agentStatus)
  }
  isAgent(): boolean {
    return this.agentStatus
  }
  public custList?: Customer[]
  public agentList?: Agent[]
  public isUpdating: boolean = false
  public isFormSubmitted: boolean = false
  public agentStatus: boolean = false;

  constructor(
    public customer?: Customer,
    public agent?: Agent,
    public branch?: BranchMan,
    public service?: BranchService
  ) {
    this.custList = agent!.custList
    this.agentList = branch!.branchAgents
  }
  ngOnInit(): void {
    this.findAllAgents()
  }
  async findAllAgents() {
    this.agentList = await lastValueFrom(this.service!.findAllAgents(this.branch!.userId!)) as Agent[]
  }

  async findAgent(agentId: number) {
    this.agentStatus = true
    this.isUpdating = true
    return await lastValueFrom(this.service!.findAgent(this.branch!.userId!, agentId))
  }

  async deleteAgent(agentId: number) {
    return await lastValueFrom(this.service!.deleteAgent(this.branch!.userId!, agentId))
  }

  submitForm(crudForm: NgForm) {
    this.isFormSubmitted = true;
    if (this.agentStatus) {
      this.updateOrAddAgent(this.agent!.userId!, this.agent!, this.isUpdating) as unknown as Agent
      this.isUpdating = false
      this.findAllAgents()
      this.agent = new Agent()
    } else {
      this.updateOrAddCust(this.customer!.userId!, this.customer!)
      this.isUpdating = false
      this.findAllAgents()
      this.customer = new Customer()
    }
    crudForm.reset()
    this.isFormSubmitted = false
  }
  async updateOrAddCust(branchId: number, customer: Customer) {
    this.customer = await lastValueFrom(this.service!.addOrUpdateCustomer(branchId, customer)) 
  }
  async findAllCustomers() {
    this.custList = await lastValueFrom(this.service!.findAllCustomers(this.branch!.userId!)) 
  }

  async findCustomer(custId:number) {
    this.agentStatus = false
    this.isUpdating = true
    this.customer = await lastValueFrom(this.service!.findCustomer(this.branch!.userId!, custId))
  }
  async updateOrAddAgent(agentId: number, agent: Agent, isUpdating: boolean) {
    if (isUpdating) {
      this.agent = await lastValueFrom(this.service!.updateAgent(this.branch!.userId!, agent)) as Agent
    } else {
      this.agent = await lastValueFrom(this.service!.addAgent(this.branch!.userId!, agent)) as Agent
    }
  }
}
