import {Component} from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
/**
 * Overview for logged in Users
 */
export class HomeComponent {

    constructor(public auth: AuthService){}
}


