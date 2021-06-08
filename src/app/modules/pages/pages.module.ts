import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    Graphic1Component,
    PagesComponent,
    ProgressComponent
  ],
  imports: [ 
    CommonModule,
    ComponentsModule,
    FormsModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
