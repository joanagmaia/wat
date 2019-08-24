import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  login(email: string, password: string) {
    return new Promise < any > ((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).then(
        res => {
          resolve(res);
        },
        err => reject(err))
      });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['/']));
  }
}
