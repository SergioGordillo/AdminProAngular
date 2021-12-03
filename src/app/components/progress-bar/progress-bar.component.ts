import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
  ]
})
export class ProgressBarComponent  {

  @Input() progress: number = 70;

  @Output() outputProgress: EventEmitter<number> = new EventEmitter();

  constructor() { }

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

}

