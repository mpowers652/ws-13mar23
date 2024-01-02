import { Component, OnInit, Input } from '@angular/core';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{
  @Input() summary:string = '';
  @Input() skills:string = '';
  @Input() dutieList:string[] = [];
  
  majorDuties:Set<string> = new Set();
  
  ngOnInit():void{this.addToDuties}
  
  addToDuties():void {
    for(let index = 0; index < this.dutieList.length; index++) {
      const duty = this.dutieList[index];
      this.majorDuties.add(duty)
    }
    this.dutieList = [];
  }
 /* 
  addToDuties():void {
    for (let index = 0; index < this.jobList.length; index++) {
      const element = this.jobList[index];
      const duties = element.duties;
      duties.forEach(this.majorDuties.add);
    }
  }
  */
}
