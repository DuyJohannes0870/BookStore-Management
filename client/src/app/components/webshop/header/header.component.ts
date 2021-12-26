import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayName:string="";
  constructor(
    private user: UserService,
    private auth: AngularFireAuth,
    private authService: AuthService,
    private router:Router,
  ) {
    this.user.getUserInfo()
      .then(user=> this.displayName = user.displayName!=null? user.displayName: user.email);
      console.log(this.displayName);
   }

  public userInfo:any
  ngOnInit(): void {
    this.auth.authState.subscribe((auth) => {
      if(auth) {
        this.userInfo = auth;
        this.user.userName = auth.email;
      }
    })
  }

}
