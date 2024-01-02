import { Component, OnInit } from '@angular/core';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-summary1',
  templateUrl: './summary1.component.html',
  styleUrls: ['./summary1.component.css']
})
export class Summary1Component implements OnInit{
  jobList:JobComponent[] = [];
  majorDuties:Set<string> = new Set();
  
  ngOnInit():void{this.addToDuties}

  addToDuties():void {
    for (let index = 0; index < this.jobList.length; index++) {
      const element = this.jobList[index];
      const duties = element.duties;
      duties.forEach(this.majorDuties.add);
    }
  }
}
