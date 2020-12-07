import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    SignUpPageComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule {}
