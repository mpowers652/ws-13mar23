import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_auth/auth.guard';
import { UserAuthService } from './_services/user-auth.service';
import { AgentReportComponent } from './agent-report/agent-report.component';
import { AgentComponent } from './agent/agent.component';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { BranchCRUDComponent } from './branch-crud/branch-crud.component';
import { BranchManComponent } from './branch-man/branch-man.component';
import { BranchReportComponent } from './branch-report/branch-report.component';
import { CeoReportComponent } from './ceo-report/ceo-report.component';
import { CeoComponent } from './ceo/ceo.component';
import { ReportComponent } from './custReport/custReport.component';
import { CustomerComponent } from './customer/customer.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BranchPaymentComponent } from './branch-payment/branch-payment.component';
import { CeoPaymentComponent } from './ceo-payment/ceo-payment.component';
import { CeoCrudComponent } from './ceo-crud/ceo-crud.component';

const routes:Routes = [
  {path:'home',component: HomeComponent},
  {
    path:'ceo', component:CeoComponent,
    // children:[
    //   {path:'hireBranchMan', component: HireBranchComponent},
    //   {path:'updateBranchMan', component:UpdateBranchComponent},
    //   {}
    // ],
    canActivate:[AuthGuard], data: {roles:['ROLE_CEO']}
  },
  {
    path:'branch',component:BranchManComponent,
    canActivate:[AuthGuard], data:{roles:['ROLE_BRANCH']}
  },
  {
    path:'agent',component:AgentComponent,
    canActivate:[AuthGuard], data:{roles:['ROLE_AGENT']}
  },
  {
    path:'customer',component:CustomerComponent,
    canActivate:[AuthGuard], data:{roles:['ROLE_CUSTOMER']},
    children:[
      {path:'report',component:ReportComponent}
    ]
  },
  {path:'login', component:LoginComponent},
  {path:'forbidden', component:ForbiddenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    AgentComponent,
    BranchManComponent,
    CeoComponent,
    ForbiddenComponent,
    ReportComponent,
    AgentReportComponent,
    BranchReportComponent,
    CeoReportComponent,
    BranchCRUDComponent,
    BranchPaymentComponent,
    CeoPaymentComponent,
    CeoCrudComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    UserAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
