import { Component } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})
export class Graphic1Component {
  public profitsChartLabels: Label[] = ['January', 'February', 'March'];
  public data: MultiDataSet = [
    [50, 150, 300]
  ];
}
