import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NavService } from "../../providers/nav.service";
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Activity } from '../../interfaces/activity';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(public route:ActivatedRoute, public auth: AuthService, public navService: NavService ) {

    }



}


