import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() showPasswordMinLength: Boolean;
  @Input() showGreenForm: Boolean;
  @Output() finalFunction: EventEmitter<void> = new EventEmitter();

  showPassword: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  tryFinalFunction() {
    if (this.formGroup.valid) {
      this.finalFunction.emit();
    }
  }

  setFieldValue(field: String, value: String): void {
    this.formGroup.controls[`${field}`].setValue(value);
  }

  getFieldValid(field: String): Boolean {
    return this.formGroup.controls[`${field}`].valid;
  }

  getFieldDirty(field: String): Boolean {
    return this.formGroup.controls[`${field}`].dirty;
  }
}
