import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
  ]
})
export class ProgressBarComponent  {

  progress: number = 70;

  constructor() { }

  get getPercentage() {
    return `${this.progress}%`;
  }

  changeValue(value: number){

    if (this.progress >= 100 && value >= 0){
      return this.progress = 100;
    }

    if (this.progress <= 0 && value <= 0){
      return this.progress = 0;
    }


    return this.progress = this.progress + value;
  }

}
