import { Component, Input } from '@angular/core';
import { BranchMan } from '../dto/branch-man';
import { UserAuthService } from '../_services/user-auth.service';
import { BranchService } from '../_services/branch.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-branch-man',
  templateUrl: './branch-man.component.html',
  styleUrls: ['./branch-man.component.css']
})
export class BranchManComponent {

branchMan: BranchMan|undefined;
private branchId:number = 0;

constructor(
  private authService:UserAuthService,
  private branchService:BranchService
){
  
}
  
reportToggle(): any {
  this.report = !this.report
  return this.report 
}
paymentOptions() {
  this.isPayment = !this.isPayment
}
toggleCrud() {
  this.isCrud = !(this.isCrud)
}

  async getBranchMan() {
  this.branchId = this.authService.getCustomerId()
  this.branchMan = await lastValueFrom(this.branchService.getBranch(this.branchId))
}

isCrud:boolean = false
isPayment:boolean = false
isCommission:boolean = false
report: boolean = false;

}
