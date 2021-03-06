import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' };

  constructor(
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  register() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.auth
        .registerWithEmailPassword(this.email, this.password)
        .then(() => {
          this.message = 'you are register with data on firbase';
          alert('suscess!');
          //this.router.navigate(['/userinfo'])
        })
        .catch((err) => {
          this.error = err;
          // this.router.navigate(['/register'])
        });
    }
  }

  validateForm(email: any, password: any) {
    if (email.lenght === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

}
