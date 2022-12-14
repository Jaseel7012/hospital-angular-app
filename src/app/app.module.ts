import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { PatientDeleteComponent } from './patient-delete/patient-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { NavbarComponent } from './navbar/navbar.component';

const myroute:Routes=[
  {
    path:"",
    'component':PatientSearchComponent
  },
  {
    path:"delete",
    'component':PatientDeleteComponent
  },
  {
    path:'view',
    'component':ViewpatientComponent
  },{
    path:'search',
    'component':PatientSearchComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientDeleteComponent,
    ViewpatientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
