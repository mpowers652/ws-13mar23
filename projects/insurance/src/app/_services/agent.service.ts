import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private url:string = "http://localhost:8080/api/agent"

  makePayment(agentId: number, custId: number, paymentVal: number) {
    return this.http.post(this.url + `/${{agentId}}/${{custId}}`,paymentVal,{headers:this.authService.getHeader()})
  }

  constructor(
    private http:HttpClient, 
    private authService:UserAuthService
    ) { }
}
