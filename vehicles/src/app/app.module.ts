import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AverageComponent } from './average/average.component';
import { SigninComponent } from './header/signin/signin.component';
import { SignupComponent } from './header/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  { path: "", component: VehicleComponent },
  {
    path: "vehicles", component: VehicleComponent, children: [
      { path: "new", component: VehicleEditComponent },
      { path: ":id", component: VehicleEditComponent }
    ]
  },
  { path: "average", component: AverageComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VehicleComponent,
    AverageComponent,
    SigninComponent,
    SignupComponent,
    VehicleEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
