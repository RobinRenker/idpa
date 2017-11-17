import {Component} from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { DistanceService } from '../../../providers/distance.service';

@Component({
    selector: 'activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss']
})
/**
 *
 */
export class ActivityListComponent {

    constructor(public auth: AuthService){
    }
}


