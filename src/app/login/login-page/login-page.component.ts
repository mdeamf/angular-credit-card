import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  doLogin(): void {
    console.log(this.loginForm);
  }

  goToSignUp(): void {
    this.router.navigate(['/login/sign-up']);
  }

  goToForgotPassword(): void {}
}
