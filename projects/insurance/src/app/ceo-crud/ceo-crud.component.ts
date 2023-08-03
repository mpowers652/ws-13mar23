import { Component } from '@angular/core';
import { Ceo } from '../dto/ceo';
import { CeoService } from '../_services/ceo.service';
import { BranchMan } from '../dto/branch-man';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-ceo-crud',
  templateUrl: './ceo-crud.component.html',
  styleUrls: ['./ceo-crud.component.css']
})
export class CeoCrudComponent {
  private isFormSubmitted: boolean = false;
  private branchList:BranchMan[] = []
  constructor(
    public ceo:Ceo,
    public service:CeoService,
    public branch?:BranchMan
  ){
    this.branchList = ceo.branches!
  }

  /**
   * findBranch
branchId:number   */
  public async findBranch(branchId:number) {
    return await this.service.findBranch(branchId)
  }

  /**
   * deleteBranch
branchId:number   */
  public async deleteBranch(branchId:number) {
    await this.service.deleteBranch(branchId)
  }

  /**
   * submitForm
branchForm:NgForm   */
  public submitForm(branchForm:NgForm) {
    this.isFormSubmitted = true;
    
      this.updateOrAddBranch(this.branch!.userId!, this.branch!, this.isUpdating) as BranchMan
      this.isUpdating = false
      this.findAllBranches()
      this.branch = new BranchMan()
    
    branchForm.reset()
    this.isFormSubmitted = false
  }
  async updateOrAddBranch(branchId: number, branch: BranchMan, isUpdating: boolean) {
    return await lastValueFrom(this.service.updateOrAddBranch(branchId, branch, isUpdating)) as BranchMan
  }
  async findAllBranches() {
    this.branchList = await lastValueFrom(this.service.findAllBranches())
  }

  public isUpdating:boolean = false;
}
