import { Component } from '@angular/core';
import { Ceo } from '../dto/ceo';
import { UserAuthService } from '../_services/user-auth.service';
import { CeoService } from '../_services/ceo.service';
import { lastValueFrom } from 'rxjs';
import { BranchMan } from '../dto/branch-man';

@Component({
  selector: 'app-ceo-report',
  templateUrl: './ceo-report.component.html',
  styleUrls: ['./ceo-report.component.css']
})
export class CeoReportComponent {
  public branchList:BranchMan[] | undefined = undefined
  constructor(
    public ceo:Ceo,
    public userAuthService:UserAuthService,
    public ceoService:CeoService
  ){
    this.setCeo()
    this.branchList = this.ceo.branches!
  }
  async setCeo() {
    this.ceo = await lastValueFrom(this.ceoService.getCEO())
  }
}
