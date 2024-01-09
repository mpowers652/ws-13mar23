import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent /*implements OnInit*/{
  @Input() title:string = '';
  @Input() duties:string[] = [];
  @Input() summary:string = '';
  @Input() company:string = '';
  @Input() locUrl:string = '';
  @Input() contact:string = '';

  dateOptions: any = {year: 'numeric', month: '2-digit'}
  receivedStartDate: Date = new Date();
  receivedEndDate: Date = new Date();

  @Input() set startDate(value: string) {
    // Parse the string value to a Date object
    this.receivedStartDate = new Date(value);
  }
  
  @Input() set endDate(value: string) {
    // Parse the string value to a Date object
    this.receivedEndDate = new Date(value);
  }

  //@Output() outDuties = new EventEmitter<string[]>();
  /*
  ngOnInit(): void {
    this.addNewItem(this.duties);
  }
  
  addNewItem(value: string[]) {
    this.outDuties.emit(value);
  }
  */
}
