import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth/auth.module';
import { PagesModule } from './modules/pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,   
    NopagefoundComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
