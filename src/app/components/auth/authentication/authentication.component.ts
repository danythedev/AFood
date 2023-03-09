import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firebaseErrors } from 'src/app/services/data/firebase/firebase.constants';
import { LogInErrorResponse as AuthErrorResponse } from 'src/app/services/data/firebase/firebase.interface';

import { FirebaseService } from 'src/app/services/data/firebase/firebase.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  public logInForm!: FormGroup;
  public showLogIn = true;

  public authError = '';

  constructor(private firebaseService: FirebaseService, private router: Router) {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  /**
   * Toogles the log in and sign up form.
   */
  public onToggleAccessMode() {
    this.showLogIn = !this.showLogIn;
  }

  /**
   * Triggers when the log in form submits its values and handles the log in or sign up process
   */
  public onSubmitLogInForm(): void {
    if (this.logInForm.valid) {
      //Verifies either if the log in or sign up form is active
      const email = this.logInForm.value.email;
      const password = this.logInForm.value.password;
      if (!this.showLogIn) {
        this.firebaseService.signUpUser(email, password).subscribe({
          next: () => this.logInForm.setErrors(null),
          error: (error: AuthErrorResponse) => {
            this.handleFormError(error);
          }
        });
      } else {
        this.loginUser(email, password);
      }
    }
    this.logInForm.reset();
  }

  /**
   * Logs in the user by receiving user credential.
   * @param {string} email - The email entered by the user.
   * @param {string} password - The passwornd entered by the user.
   */
  public loginUser(email: string, password: string): void {
    this.firebaseService.signIn(email, password).subscribe({
      next: (response) => {
        this.logInForm.setErrors(null)
        this.router.navigate(['/home'])
      },
      error: (error) => {
        console.log(error)
        this.handleFormError(error);
      }
    })
  }

  /**
   * Handles form errors and determines the form error for the current auth form.
   * @param errorValue 
   */
  public handleFormError(errorData: AuthErrorResponse): void {
    const errorValue = errorData.error.error.message;
    this.logInForm.setErrors({formInvalidData: true});
    this.authError = firebaseErrors[errorValue];
  }
}
