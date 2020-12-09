import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
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
    ForgotPasswordPageComponent,
  ],
  imports: [
    /* Angular Modules */
    CommonModule,
    LoginRoutingModule,

    /* PrimeNG Modules */
    InputTextModule,
    CardModule,
    ButtonModule,
    DialogModule,

    /* Angular Form Modules */
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
