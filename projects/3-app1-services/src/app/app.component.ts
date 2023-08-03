import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3-app1-services';
  personname:string = 'Guest'
  greetMsg:string = ''
  constructor(public hello:HelloService) {

  }
  greet() {
    this.greetMsg = this.hello.greet(this.personname)
  }
}
