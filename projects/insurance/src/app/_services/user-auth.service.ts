import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  setCustomerId(customerId: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  public setUserId(userId:number){
    console.log()
    localStorage.setItem('userId',userId+'')
  }
  public getCustomerId():number{
    //return the customer id
    return parseInt(localStorage.getItem('userId') as string)
  }
  public setRoles(roles: []) {
    //set the roles for the specified users
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    //return the roles in a session
    return JSON.parse(localStorage.getItem('roles') as string);
  }

  public setToken(token: string) {
    //set the full bearer token using the specified token
    localStorage.setItem('token', token);
  }

  public getToken(): string {
    //get the full Bearer token as string
    return localStorage.getItem('token') as string;
  }

  public clear() {
    //to be done when user logs out
    localStorage.clear();
  }

  public isLoggedIn() {
    //if roles are non-null and token is non-null...
    return (this.getRoles() && this.getToken());
  }

  public getHeader():HttpHeaders {
    let head: HttpHeaders = new HttpHeaders()
    head.set('Authorization',`Bearer ${this.getToken()}`)
    return head
  }
}
