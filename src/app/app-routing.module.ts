import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth.routing';
import { PagesRoutingModule } from './modules/pages/pages.routing';

import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';

const routes: Routes = [
  // path: /auth      (AuthRouting)
  // path: /dashboard (PagesRouting)
  // path: /doctors   (DoctorRouting)
  // path: /purchase  (PurchaseRouting)

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
