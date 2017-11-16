import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {
    }

    canActivate(): Observable<boolean> {
        let obs = this.auth.isAuthenticated;
        obs.subscribe((canNavigate)=>{
            if(!canNavigate){
                this.router.navigate(['start']); //redirect user if not logged in
            }
        });
        return obs;



    }
}