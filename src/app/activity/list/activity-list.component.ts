import {Component} from '@angular/core';
import { ActivityService } from '../../providers/activity.service';

@Component({
    selector: 'activity-list',
    templateUrl: './activity-list.component.html',
    styleUrls: ['./activity-list.component.scss']
})
/**
 *
 */
export class ActivityListComponent {

    constructor(public activityService: ActivityService){
    }
}


