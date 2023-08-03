import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '5-parent-child';
  message1:string = ''
  message2:string = ''

  loadTextIntoMessage1and2(x:string, y:string){
    this.message1 = x
    this.message2 = y
  }
}
