import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() finalFunction: EventEmitter<void> = new EventEmitter();

  showPassword: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  tryFinalFunction() {
    this.finalFunction.emit();
  }
}
