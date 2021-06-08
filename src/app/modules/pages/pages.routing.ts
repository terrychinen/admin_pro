import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar' }  },
            { path: 'graphic1', component: Graphic1Component, data: { title: 'Graphic' }  },
            { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Account Settings' }  },
            { path: 'promise', component: PromiseComponent, data: { title: 'Promise' }  },
            { path: 'rxjs', component: RxjsComponent, data: { title: 'RxJS' } }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
