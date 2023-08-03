import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  greet(personname:string) {
    return `Hello ${personname} Welcome to Angular Services and Dependency Injection`
  }
}
