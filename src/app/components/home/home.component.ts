import {Component} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DistanceService } from '../../providers/distance.service';
import {} from '@types/googlemaps';
import LatLng = google.maps.LatLng;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
/**
 * Overview for logged in Users
 */
export class HomeComponent {

    constructor(public auth: AuthService, public dist: DistanceService){
        dist.getDistance(new LatLng(1,1),new LatLng(1.2,1)).then((res)=>{
            console.log(res);
        });
    }
}


