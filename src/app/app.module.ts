import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './modules/shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './modules/shared/sidebar/sidebar.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { ProgressComponent } from './modules/pages/progress/progress.component';
import { Graphic1Component } from './modules/pages/graphic1/graphic1.component';
import { PagesComponent } from './modules/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ProgressComponent,
    Graphic1Component,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
