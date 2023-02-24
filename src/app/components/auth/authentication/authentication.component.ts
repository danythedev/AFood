import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/data/firebase/firebase.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  public logInForm!: FormGroup;
  public showLogIn = true; 

  constructor(private firebaseService: FirebaseService) {
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,  Validators.minLength(8)])
    })
   }

  public ngOnInit(): void {
 
  }

  onToggleAccessMode(){
    this.showLogIn = !this.showLogIn;
  }

  onSubmitLogInForm(): void {
    if(this.logInForm.valid){
      if(!this.showLogIn){
        const email = this.logInForm.value.email;
        const password = this.logInForm.value.password;
        this.firebaseService.signUpUser(email, password)
      }
    }
    this.logInForm.reset();
  }

}
