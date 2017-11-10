import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {
    }

    canActivate(): Promise<boolean> {
        return this.auth.isAuthenticated().then((isAuth)=>{
            console.log(isAuth);
            if (!isAuth){
                this.router.navigate(['']); //redirect to start
            }
            return isAuth;
        })

    }
}