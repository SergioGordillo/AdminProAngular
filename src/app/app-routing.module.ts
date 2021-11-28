import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphOneComponent } from './pages/graph-one/graph-one.component';
import { Page404Component } from './pages/page404/page404.component';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
  {path:'', component: PagesComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'graph-one', component: GraphOneComponent},
    {path: 'progress', component: ProgressComponent},
    {path:'', redirectTo: '/dashboard', pathMatch: 'full'}
  ]},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  

  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }