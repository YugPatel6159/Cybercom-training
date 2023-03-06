import { Component ,Input, Output, EventEmitter, OnInit, DoCheck, OnChanges,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnChanges,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  title ='yug patel'
  money='20000'
  @Input('img') postImg='';
  @Output() imgSelected = new EventEmitter<string>();
  currentDate = new Date();
  constructor(){
    console.log('this is constructor',this.postImg);
  }
  ngOnInit(){
    console.log('this is ngonit',this.postImg);
  }
  ngOnChanges(){
    console.log('this is ngOnChanges',this.postImg);
  }
  ngDoCheck(){
    console.log('this is ngDoCheck',this.postImg);
  }
  ngAfterContentInit(): void {
    console.log('this is ngAfterContentInit',this.postImg);
  }
  ngAfterContentChecked(): void {
    console.log('this is ngAfterContentChecked',this.postImg);
  }
  ngAfterViewInit(): void {
    console.log('this is ngAfterViewInit',this.postImg);
  }
  ngAfterViewChecked(): void {
    console.log('this is ngAfterViewChecked',this.postImg);
  }
}
