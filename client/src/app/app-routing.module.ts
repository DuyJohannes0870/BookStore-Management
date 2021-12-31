import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableclientComponent } from './components/tableclient/tableclient.component';
import { TableserverComponent } from './components/tableserver/tableserver.component';
import { AdminComponent } from './components/admin/admin.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AuthenticationGuard } from './guards/authentication.guard';
import { ProductsingleComponent } from './components/webshop/productsingle/productsingle.component';
import { HomeshopComponent } from './components/webshop/homeshop/homeshop.component';
import { CartComponent } from './components/webshop/cart/cart.component';
import { CheckoutComponent } from './components/webshop/checkout/checkout.component';
import { ShopComponent } from './components/webshop/shop/shop.component';
import { DashboardComponent } from './components/webshop/dashboard/dashboard.component';
import { OrdersComponent } from './components/webshop/orders/orders.component';
import { LoginshopComponent } from './components/webshop/loginshop/loginshop.component';
import { SignupComponent } from './components/webshop/signup/signup.component';
import { ForgotPasswordComponent } from './components/webshop/forgot-password/forgot-password.component';

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
  {path: '', component: HomeshopComponent},
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashboard", component:DashboardComponent },
  { path:"orders", component:OrdersComponent },
  { path:"loginshop", component:LoginshopComponent },
  { path:"signup", component:SignupComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  




  { path: 'dashboardclient', loadChildren: () => import('./pages/dashboardclient/dashboardclient.module').then(m => m.DashboardclientModule) },
  { path: 'login01', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register01', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
