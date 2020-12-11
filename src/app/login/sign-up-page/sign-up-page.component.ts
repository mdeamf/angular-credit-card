import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css', '../login.css'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  signUpShowDialog: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  /** Show the successful "Forgot Password" dialog. */
  doSignUp(): void {
    this.signUpShowDialog = true;
  }

  /** Navigate to the Login page. */
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
