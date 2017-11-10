import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/first';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    constructor(public auth: AngularFireAuth, public router: Router) {}

    public readonly user = this.auth.authState;

    /**
     * Is the user logged in
     * @return {Promise<boolean>}
     */
    public isAuthenticated(): Promise<boolean> {
        return this.auth.authState.first().toPromise().then((user)=>{
            return !!user;
        });
    }

    /**
     * log the user in
     */
    public login() {
        this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((result)=>{
            this.router.navigate(['/home']); //navigate to home after login
        }, (error)=>{
            alert("LOGIN FAILED :(");
        });
    }

    /**
     * log the user out
     */
    public logout() {
        this.auth.auth.signOut().then(()=>{
            this.router.navigate(['']); //navigate to start after logout
        });
    }
}