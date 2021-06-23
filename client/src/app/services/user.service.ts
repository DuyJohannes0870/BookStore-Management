import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public db: AngularFirestore,
    public auth: AngularFireAuth
  ) { }

  getUserInfo() {
    return new Promise<any>((resolve, rejects) => {
      var user = this.auth.onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
        } else {
          rejects('No one is logged')
        }
      })
    })
  }
}
