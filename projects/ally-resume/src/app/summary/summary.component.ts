import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { JobColl } from '../job-coll';
import { Job } from '../job';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements AfterViewInit{
 
  @Input() summary:string = '';
  @Input() skills:string = '';

  @ViewChildren(JobComponent) jobList?: QueryList<JobComponent>;
  
  majorDuties:Set<string> = new Set();
  
  ngAfterViewInit(): void {
    this.jobList?.forEach(job=>{
      const jobDuties = job.duties
      for (let index = 0; index < jobDuties.length; index++) {
        const duty = jobDuties[index];
        this.majorDuties.add(duty)
      }
    });
  } 
  
}
