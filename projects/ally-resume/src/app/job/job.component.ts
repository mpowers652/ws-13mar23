import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent {
  @Input() title:string = '';
  @Input() duties:string[] = [];
  @Input() summary:string = '';
  @Input() jobId:string = '';
  @Input() company:string = '';
  @Input() locUrl:string = '';
  @Input() contact:string = '';
  @Input() startDate:Date = new Date();
  @Input() endDate:Date = new Date();
}
