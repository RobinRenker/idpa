import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { DistanceService } from '../../../providers/distance.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import LatLng = google.maps.LatLng;
import Marker = google.maps.Marker;
import Map = google.maps.Map;
import DistanceMatrixResponse = google.maps.DistanceMatrixResponse;
import DistanceMatrixResponseElement = google.maps.DistanceMatrixResponseElement;

@Component({
    selector: 'activity-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.scss']
})
/**
 *
 */
export class ActivityEditComponent implements OnInit{

    constructor(public auth: AuthService, private route: ActivatedRoute, public dist:DistanceService){
    }

    transport_modes = [
        {name: 'Auto', sound: 'Woof!'},
        {name: 'Zug', sound: 'Meow!'},
        {name: 'Zu Fuss', sound: 'Moo!'},
        {name: 'Flugzeug', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

    animalControl = new FormControl('', [Validators.required]);


    public calc(){
        this.dist.getDistance(this.originMarker.getPosition(), this.destinationMarker.getPosition()).then((res)=>{
            console.log(res);
            this.distance = res;
        });
    }

    public originMarker: Marker;
    public destinationMarker: Marker;
    public distance: DistanceMatrixResponseElement;



    ngOnInit(){

        let map = new Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
        this.originMarker = new Marker({
            draggable: true,
            position: {lat: -34.397, lng: 150.644},
            map: map,
            title: 'Startpunkt'
        });


        this.destinationMarker = new Marker({
            draggable: true,
            position: {lat: -34.397, lng: 150.64},
            map: map,
            icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            title: 'Endpunkt'
        });




        this.route.params.subscribe((params)=>{
            console.log(params['id']);
            if(params['id']){
                console.log('load activity');
            }
            else {
                console.log('create activity');
            }
        });
    }


}


