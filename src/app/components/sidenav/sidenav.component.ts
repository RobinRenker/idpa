import { Component } from '@angular/core';
import { NavService } from '../../providers/nav.service';

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

    private views = [
        {name: 'Wilkommen', id: 'start', icon: 'emoticon'},
        {name: 'Meine Aktivitäten', id: 'home', icon: 'home'},
        {name: 'Über', id: 'about', icon: 'information-outline'}];

    constructor(public navService: NavService) {
    }
}


