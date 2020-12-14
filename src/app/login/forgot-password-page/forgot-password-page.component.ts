import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css', '../login.css'],
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPasswordShowDialog: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /** Show the successful "Forgot Password" dialog. */
  doForgotPassword(): void {
    this.forgotPasswordShowDialog = true;
  }

  /** Navigate to the Login page. */
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
