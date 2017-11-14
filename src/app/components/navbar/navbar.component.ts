import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NavService } from "../../providers/nav.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    constructor(public auth: AuthService, public navService: NavService) {}
}


