import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { JobComponent } from '../job/job.component';

@Component({
  selector: 'app-summary2',
  templateUrl: './summary2.component.html',
  styleUrls: ['./summary2.component.css']
})
export class Summary2Component implements /*OnInit,*/ AfterViewInit{
 
  @Input() summary:string = '';
  @Input() skills:string = '';
  @Input() dutieList:string[] = [];

  @ViewChildren(JobComponent) jobList?: QueryList<JobComponent>;
  
  majorDuties:Set<string> = new Set();
  
  //ngOnInit():void{this.addToDuties}
  
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
