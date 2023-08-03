import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message:any;
  customerId:number=0
  constructor(private userService: UserService,
    private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.userApi();
    this.customerId=this.userAuthService.getCustomerId()
  }

  userApi() {
    this.userService.userApi().subscribe(
      (response) => {
        console.log(response);
        this.message = response;
      }, 
      (error)=>{
        console.log(error);
      }
    );
  }
 
}
