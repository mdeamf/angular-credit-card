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

  doSignUp(): void {
    this.signUpShowDialog = true;
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
