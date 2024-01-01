import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { JobComponent } from './job/job.component';
import { Summary1Component } from './summary1/summary1.component';
import { Summary2Component } from './summary2/summary2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    JobComponent,
    Summary1Component,
    Summary2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
