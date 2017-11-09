import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AngularFireAuth, public router: Router) {
    }

    canActivate(): Promise<boolean> {
        return this.auth.authState.first().toPromise().then((user)=>{
            console.log(user);
            if(user){ //user is logged in allow access
                return true;
            }
            else {
                this.router.navigate(['home']); //redirect to /home
                return false;
            }

        });

    }
}