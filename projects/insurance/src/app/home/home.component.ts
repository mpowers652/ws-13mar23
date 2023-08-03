import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
isNotLoggedIn(): any {
  return !(this.userAuthService.isLoggedIn());
}

  constructor(
    
    private userAuthService:UserAuthService
  ){}
isCustomer(): any {
  if (this.userAuthService.getRoles().at(0) === 'CUSTOMER') {
    return true;
  } else {
    return false;
  }
}
isAgent(): any {
  if (this.userAuthService.getRoles().at(0) === 'AGENT') {
    return true;
  } else {
    return false;
  }
}
isBranch(): any {
  if (this.userAuthService.getRoles().at(0) === 'BRANCH') {
    return true;
  } else {
    return false;
  }
}
isCeo(): any {
  if (this.userAuthService.getRoles().at(0) === 'CEO') {
    return true;
  } else {
    return false;
  }
}

}
