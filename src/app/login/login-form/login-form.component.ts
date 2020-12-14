import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  /** formGroup object to bind to the form reactively. Requires "username" and "password" fields. */
  @Input() formGroup: FormGroup;
  /** Should it show a warning for the password field's length? */
  @Input() showPasswordMinLength: boolean;
  /** Should it force the form to be showed in a green color scheme? */
  @Input() showGreenForm: boolean;
  /** Function that should be called if the user press "Enter" while focused on the password field. */
  @Output() finalFunction: EventEmitter<void> = new EventEmitter();

  /** Should it show the password field as text? */
  showPassword: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /** Try to call the final function that was bind with the component's output. */
  tryFinalFunction() {
    // Make sure the function is only called if the form is valid.
    if (this.formGroup.valid) {
      this.finalFunction.emit();
    }
  }

  /**
   * Set a value in a specific field. It's better than using template variables, since it resets the form's state.
   * @param field Field name inside the Form control.
   * @param value The value that should be considered inside that field.
   */
  setFieldValue(field: string, value: string): void {
    this.formGroup.controls[`${field}`].setValue(value);
  }

  /**
   * Check if a field is valid.
   * @param field Field name inside the Form control.
   * @param value The value that should be considered inside that field.
   */
  getFieldValid(field: string): boolean {
    return this.formGroup.controls[`${field}`].valid;
  }

  /**
   * Check if a field is dirty (has already been touched or changed).
   * @param field Field name inside the Form control.
   * @param value The value that should be considered inside that field.
   */
  getFieldDirty(field: string): boolean {
    return this.formGroup.controls[`${field}`].dirty;
  }
}
