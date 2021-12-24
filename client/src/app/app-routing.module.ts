import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableclientComponent } from './components/tableclient/tableclient.component';
import { TableserverComponent } from './components/tableserver/tableserver.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { ProductsingleComponent } from './components/webshop/productsingle/productsingle.component';
import { HomeComponent } from './components/webshop/home/home.component';
import { CartComponent } from './components/webshop/cart/cart.component';




const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'tableclient', component: TableclientComponent },
      { path: 'tableserver', component: TableserverComponent },]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: HomeComponent},
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },

  { path: 'dashboardclient', loadChildren: () => import('./pages/dashboardclient/dashboardclient.module').then(m => m.DashboardclientModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register01', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
