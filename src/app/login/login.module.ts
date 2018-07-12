import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginRoutingModule,
    LoginComponent
  ]
})
export class LoginModule { }
