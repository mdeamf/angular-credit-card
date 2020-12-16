import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css', '../login.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  isDoingLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private session: SessionService
  ) {}

  ngOnInit(): void {}

  /** Login - pretend the user is logging in. */
  doLogin(): void {
    this.isDoingLogin = true;

    this.session.doLogin()
    .then(() => {
      this.router.navigate(['/home']);
      this.isDoingLogin = false;
    })
  }

  /** Navigate to the Sign Up page. */
  goToSignUp(): void {
    this.router.navigate(['/login/sign-up']);
  }

  /** Navigate to the Forgot Password page. */
  goToForgotPassword(): void {
    this.router.navigate(['/login/forgot-password']);
  }
}
