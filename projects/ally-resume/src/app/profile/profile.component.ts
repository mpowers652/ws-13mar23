import { Component } from '@angular/core';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  jobList:JobComponent[] = [];
  majorDuties:Set<string> = new Set();
  
  addToDuties():void {
    for (let index = 0; index < this.jobList.length; index++) {
      const element = this.jobList[index];
      const duties = element.duties;
      duties.forEach(this.majorDuties.add);
    }
  }
}
