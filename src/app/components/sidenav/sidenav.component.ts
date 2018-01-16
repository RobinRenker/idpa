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
        {name: 'Wilkommen', id: 'start', icon: 'emoticon', login: false},
        {name: 'Auswertung', id: 'overview', icon: 'earth', login: true},
        {name: 'Tipps', id: 'tipp', icon: 'exclamation', login: true},
        {name: 'Meine Aktivitäten', id: 'activities/list', icon: 'home', login: true},
        {name: 'Neue Aktivität', id: 'activities/add', icon: 'plus', login: true},
        {name: 'Fahrzeuge', id: 'vehicle/list', icon: 'car-side', login: true},
        {name: 'Settings', id: 'settings', icon: 'settings', login: true},
        {name: 'Über', id: 'home', icon: 'information-outline', login: false}];

    constructor(public navService: NavService, public auth: AuthService) {
        
    }
}


