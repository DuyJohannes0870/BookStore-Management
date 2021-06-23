import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firbase error handle

  constructor(
    private authService: AuthService,
    private Router: Router
  ) { }

  ngOnInit(): void { }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }

  loginWithGoogle() {
    this.authService.loginWithGmail().then(res => {
      this.Router.navigate(['dashboardclient'])
    }).catch(err => {
      console.log("Đăng nhập không thể thực thi!")
    })
  }


  loginByEmail() {
    if (this.email == null && this.password == null) {
      this.clearErrorMessage();
      if (this.validateForm(this.email, this.password)) {
        this.authService
          .loginWithEmailPassword(this.email, this.password)
          .then(() => {
            this.Router.navigate(['/dashboardclient']);
            // alert("susscess login!")
          })
          .catch((err) => {
            this.error = err;
            this.Router.navigate(['/login']);
          });
      }
    } else {
      alert("Fill Email & Password! Please")
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
