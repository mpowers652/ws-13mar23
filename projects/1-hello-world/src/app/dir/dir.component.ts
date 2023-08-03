import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent {
  isLoggedIn:boolean = false;
  productNames:string[] = ['IPhone-14', 'IPhone-13', 'S-22', 'S-23', 'RedMi-10']
}
