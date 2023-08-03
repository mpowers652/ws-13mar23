import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { UserService } from './user.service';
import { Ceo } from '../dto/ceo';
import { UserAuthService } from './user-auth.service';
import { BranchMan } from '../dto/branch-man';

@Injectable({
  providedIn: 'root'
})
export class CeoService implements OnInit{
  updateOrAddBranch(branchId: number, branch: BranchMan, isUpdating: boolean) {
    if (isUpdating) {
      return this.http.put(this.api + `/branch`, branch, {headers:this.authService.getHeader()}) as Observable<Ceo>
    } else {
      return this.http.post(this.api + `/branch`, branch, {headers:this.authService.getHeader()}) as Observable<Ceo>
    }
  }
  findAllBranches() {
    return this.http.get(this.api + `/branches`,{headers:this.authService.getHeader()}) as Observable<BranchMan[]>
  }
  deleteBranch(branchId: number) {
    this.http.delete(this.api + `/branch/${branchId}`, {headers:this.authService.getHeader()})
  }
  findBranch(branchId: number) {
    return this.http.get(this.api + `/branch/${branchId}`,{headers:this.authService.getHeader()}) as Observable<BranchMan>
  }
  makePayment(custId: number, paymentVal: number) {
    return this.http.post(this.api + `/${custId}/payment`, paymentVal, {headers:this.authService.getHeader()}) as Observable<boolean>
  }
  getCEO() {
    return this.http.get('http://localhost:8080/api') as Observable<Ceo>
  }
  api:string = 'http://localhost:8080/api/ceo'
  constructor(
    private http: HttpClient,
    private router:Router, 
    private authService:UserAuthService
  ) { }
  ngOnInit(): void {
    
  }

  runReport() {
    this.router.navigate(['report'])
  }
}
