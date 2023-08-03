import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnChanges, OnInit, DoCheck, 
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,OnDestroy{
  @Input() msg:string = ''
  constructor() {
    console.log(`hello component constructor` )
  }
  ngOnDestroy(): void {
   console.log(`object destroyed`);
  }
  ngAfterViewChecked(): void {
    console.log(`after view check called...`);
  }
  ngAfterViewInit(): void {
   console.log(`after view initialized`)
  }
  ngAfterContentChecked(): void {
    console.log(`after afterContentChecked`)
  }
  ngAfterContentInit(): void {
    console.log(`after content called`)
  }
  ngOnInit(): void {
    console.log(`ng on init called...`)
  }
  ngOnChanges(x:SimpleChanges) {
    //OnChanges was not implemented prior to going error-free
    console.log(`ng on changes called...`)
  }
  ngDoCheck() {
    console.log(`do check called...`)
  }
}
