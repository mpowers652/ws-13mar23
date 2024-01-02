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
  @Input() jobId:string = '';
  @Input() company:string = '';
  @Input() locUrl:string = '';
  @Input() contact:string = '';
  @Input() startDate:Date = new Date();
  @Input() endDate:Date = new Date();

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
