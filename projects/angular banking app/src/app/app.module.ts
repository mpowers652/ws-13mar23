import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { AuthInterceptor } from './_auth/auth.interceptor';
import { UserService } from './_services/user.service';
import { BankaccountComponent } from './bank-account/bank-account.component';
import { ShowAllAccountsComponent } from './show-all-accounts/show-all-accounts.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { OffersComponent } from './offers/offers.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { CarLoanComponent } from './car-loan/car-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    BankaccountComponent,
    ShowAllAccountsComponent,
    AccountProfileComponent,
    OffersComponent,
    CreditCardComponent,
    HomeLoanComponent,
    CarLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
