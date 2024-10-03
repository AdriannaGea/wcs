import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscription-form.component.html',
  styleUrl: './inscription-form.component.scss',
})
export class InscriptionFormComponent {
  inscriptionForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.inscriptionForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      passwords: this.fb.group({
        password: ['', [Validators.required, this.passwordValidator]],
        confirmPassword: ['', Validators.required],
      }, { validators: this.passwordsMatchValidator })
    });
  }

  passwordValidator(control: any) {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumeric = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && password.length >= 12;

    return isValid ? null : { securePassword: true };
  }

  passwordsMatchValidator(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
    }
  }
}
