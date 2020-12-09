import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css', '../login.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPasswordShowDialog: Boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  doForgotPassword(): void {
    this.forgotPasswordShowDialog = true;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
