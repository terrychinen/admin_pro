import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit {

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  @Input() progress: number = 10;
  @Output() valueOutput: EventEmitter<number> = new EventEmitter();

  @Input() btnClass: string = 'btn-primary';

  changeValue(value: number) {
    if(this.progress >= 100 && value >=0) {
      this.valueOutput.emit(100);
      return this.progress = 100;
    }

    if(this.progress <= 0 && value <0) {
      this.valueOutput.emit(0);
      return this.progress = 0;
    }

    this.progress += value;
    this.valueOutput.emit(this.progress);
  }

  onChange(newValue: number) {
    if(newValue >= 100) {
      this.progress = 100;
    }else if (newValue <= 0) {
      this.progress = 0;
    }else {
      this.progress = newValue;
    }
    this.valueOutput.emit(this.progress);    
  }
}
