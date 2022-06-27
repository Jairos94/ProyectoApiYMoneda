
import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeCurrencyComponent } from './change-currency/change-currency.component';
import { HomeComponent } from './home/home.component';
import { LocalCurrencyComponent } from './local-currency/local-currency.component';


import { LoginComponent } from './login/login.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},

  {path:'menu',component:HomeComponent,children:[
   
    {path:'local-currency',component:LocalCurrencyComponent},
    {path:'change-currency',component:ChangeCurrencyComponent},
    {path:'users',component:ViewUserComponent},
  ]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path:'**',redirectTo:'login'},
  
];
@Injectable({providedIn: 'root'})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
