import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
  ]
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: number = 70;
  @Input() btnClass: string = "btn-primary";

  @Output() outputProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
    this.btnClass=`btn ${this.btnClass}`
  }

  changeValue(value: number){

    if (this.progress >= 100 && value >= 0){
      this.outputProgress.emit(100);      
      return this.progress = 100;
    }

    if (this.progress <= 0 && value <= 0){
      this.outputProgress.emit(0); 
      return this.progress = 0;
    }

    this.progress=this.progress+value;
    return this.outputProgress.emit(this.progress); 
  }

  onChange(value: number) {

    if (value >= 100) {
      this.progress = 100;
    } else if (value <= 0){
      this.progress = 0;
    } else {
      this.progress = value;
    }

    return this.outputProgress.emit(this.progress); 
  }

}

