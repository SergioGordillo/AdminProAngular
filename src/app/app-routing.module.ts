import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { Page404Component } from './page404/page404.component';

const routes: Routes = [  

  // path: 'login', AuthRoutingModule
  // path: 'dashboard', PagesRoutingModule
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }