import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/first';
import 'rxjs/add/observable/zip';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { default as firebase, User } from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable()
export class AuthService {
    constructor(public auth: AngularFireAuth, public router: Router) {

        this.state = Observable.zip(auth.authState, (state) => {
            return !!state;
        }); //update Service State

        this.user = auth.authState;
    }

    private state: Observable<boolean>;
    public user: Observable<User>;

    /**
     * Is the user logged in
     * @return {Observable<boolean>}
     */
    public get isAuthenticated(): Observable<boolean> {
        return this.state;
    }

    /**
     * log the user in
     */
    public login() {
        this.auth.auth.signInWithPopup(new GoogleAuthProvider()).then((result) => {
            this.router.navigate(['/home']); //navigate to home after login
        }, (error) => {
            console.log(error);
            alert('LOGIN FAILED :(');
        });
    }

    /**
     * log the user out
     */
    public logout() {
        this.auth.auth.signOut().then(() => {
            this.router.navigate(['']); //navigate to start after logout
        });
    }
}