import { Component } from '@angular/core';
import { NavService } from '../../providers/nav.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    private views = [
        {name: 'Meine Aktivitäten', id: 'activities/list', icon: 'home', login: true},
        {name: 'Neue Aktivität', id: 'activities/add', icon: 'plus', login: true},
        {name: 'Fahrzeuge', id: 'vehicle', icon: 'car-side', login: true},
        {name: 'Wilkommen', id: 'start', icon: 'emoticon', login: false},
        {name: 'Über', id: 'about', icon: 'information-outline', login: false}];

    constructor(public navService: NavService, public auth: AuthService) {
        
    }
}


