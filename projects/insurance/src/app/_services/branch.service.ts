import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../dto/agent';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';
import { Customer } from '../dto/customer';
import { BranchMan } from '../dto/branch-man';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  getBranch(branchId: number): Observable<BranchMan> {
    return this.http.get(this.url.replace('branch','ceo') + `/branch/${branchId}`) as Observable<BranchMan>
  }
  calculateCommission(userId: number, agentId: number):Observable<number>{
    return this.http.get(this.url + `/${userId}/${agentId}/commission`, {headers:this.authHeader}) as Observable<number>
  }
  makePayment(userId: number, custId: number, paymentVal: number) {
    return  this.http.post(this.url + `/${userId}/${custId}/payment`, paymentVal, {headers:this.authHeader}) as Observable<boolean>
  }
  deleteCustomer(userId: number, custId: number) {
    this.http.delete(this.url + `/${userId}/customer/${custId}`,{headers:this.authHeader})
  }
  findAllCustomers(userId: number): Observable<Customer[]> {
    return this.http.get(this.url + `/${userId}/customer`, {headers:this.authHeader}) as Observable<Customer[]>
  }
  findCustomer(branchId: number, custId:number): Observable<Customer> {
    return this.http.get(this.url + `/${branchId}/customer/${custId}`, {headers:this.authHeader}) as Observable<Customer>
  }
  addOrUpdateCustomer(branchId: number, customer: Customer):Observable<Customer> {
    return this.http.post(this.url + `/${branchId}/customer`, customer, {headers:this.authHeader}) as Observable<Customer>
  }
  updateAgent(userId: number, agent: Agent): Observable<Agent> {
    return this.http.put(this.url + `/${userId}/agent`, agent,{headers:this.authHeader}) as Observable<Agent>
  }
  addAgent(userId: number, agent: Agent): Observable<Agent> {
    return this.http.post(this.url + `/${userId}`,agent, {headers:this.authHeader}) as Observable<Agent>
  }
  findAllAgents(branchId:number): import("rxjs").Observable<Agent[]> {
    return this.http.get(this.url + `/${branchId}/agent`, {headers:this.authHeader}) as Observable<Agent[]>
  }
  deleteAgent(userId: number, agentId: number): import("rxjs").Observable<unknown> {
    return this.http.delete(this.url + `/${userId}/agent/${agentId}`,{headers:this.authHeader})
  }

  private url:string = 'http://localhost:8080/api/branch'
  private authHeader = this.authService.getHeader()
  
  findAgent(branchId: number, agentId: number){
    return this.http.get(this.url +`/${branchId}/agent/${agentId}`,{headers:this.authHeader})
  }

  constructor(
    private http: HttpClient,
    private authService:UserAuthService
  ) { }
}
