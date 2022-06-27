import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocalCurrencyComponent } from './local-currency/local-currency.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { PipeAplicationPipe } from './pipes/pipe-aplication.pipe';
import { ChangeCurrencyComponent } from './change-currency/change-currency.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LocalCurrencyComponent,
    ViewUserComponent,
    PipeAplicationPipe,
    ChangeCurrencyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
