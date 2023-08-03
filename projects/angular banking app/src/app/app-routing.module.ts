import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { AdminComponent } from './admin/admin.component';
import { BankaccountComponent } from './bank-account/bank-account.component';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { ShowAllAccountsComponent } from './show-all-accounts/show-all-accounts.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'createaccount', component: BankaccountComponent },
      { path: 'showallaccounts', component: ShowAllAccountsComponent }
    ],
    canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }
   
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard], data: { roles: ['ROLE_USER'] },
    children:[
      { path: 'viewaccountprofile/:customerId', component: AccountProfileComponent },
      { path: 'viewoffers', component: OffersComponent },
      { path: 'creditcard/:customerId', component: CreditCardComponent },
      { path: 'homeloan/:customerId', component: HomeLoanComponent },
      { path: 'carloan/:customerId', component: CarLoanComponent },

    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
