import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment/increment.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    DonaComponent,
    IncrementComponent
  ],
  exports: [
    DonaComponent,
    IncrementComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
