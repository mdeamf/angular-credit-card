import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';

/** Routes - Login module routes. */
const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    data: { animation: 'LoginPage' }
  },
  {
    path: 'sign-up',
    component: SignUpPageComponent,
    data: { animation: 'SignUpPage' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordPageComponent,
    data: { animation: 'ForgotPasswordPage' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
