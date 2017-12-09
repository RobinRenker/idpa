import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DistanceService } from '../../providers/distance.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../../interfaces/activity';
import { ActivityService } from '../../providers/activity.service';
import {default as firebase} from 'firebase';
import * as moment from 'moment';
import Marker = google.maps.Marker;
import Map = google.maps.Map;
import DistanceMatrixResponseElement = google.maps.DistanceMatrixResponseElement;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import DocumentReference = firebase.firestore.DocumentReference;
import GeoPoint = firebase.firestore.GeoPoint;
import LatLng = google.maps.LatLng;

@Component({
    selector: 'activity-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.scss']
})
/**
 *
 */
export class ActivityEditComponent implements OnInit, OnChanges {

    constructor(public auth: AuthService, private route: ActivatedRoute, public dist: DistanceService, public activityService: ActivityService, public fb: FormBuilder) {

        this.activityForm = this.fb.group({
            time: ['', Validators.required],
            timeString: ['', Validators.required],
            start: ['', Validators.required],
            end: ['', Validators.required],
            distance: [0, Validators.required],
            vehicle: ['', Validators.required]
        });

    }

    public calc() {
        this.dist.getDistance(this.originMarker.getPosition(), this.destinationMarker.getPosition()).then((res) => {
            console.log(res);
            this.distance = res;
        });
    }

    public originMarker: Marker;
    public destinationMarker: Marker;
    public map: Map;
    public distance: DistanceMatrixResponseElement;

    public activityForm: FormGroup;
    public activityRef: DocumentSnapshot;

    public saveActivity() {

        let values = this.activityForm.value;
        let activity = new Activity();
        activity.vehicle = values.vehicle;
        let date = moment(values.time);
        activity.start = new GeoPoint(this.originMarker.getPosition().lat(), this.originMarker.getPosition().lng());
        activity.end = new GeoPoint(this.destinationMarker.getPosition().lat(), this.destinationMarker.getPosition().lng());
        activity.time = moment(date.format('YYYY-MM-DD') + ' ' + values.timeString).toDate();
        activity.distance = values.distance;
        console.log(activity.time);
        this.activityRef.ref.update({...activity});
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    ngOnInit() {

        let map = new Map(document.getElementById('map'), {
            center: {lat: 46.957, lng: 7.444},
            zoom: 8
        });

        this.map = map;
        google.maps.event.addDomListener(window, 'resize', function () {
            var center = map.getCenter();
            google.maps.event.trigger(map, 'resize');
            map.setCenter(center);
        });

        //Prevent font change
        google.maps.event.addListenerOnce(map, 'idle', function () {
            let font = document.querySelector('link[href$="//fonts.googleapis.com/css?family=Roboto:300,400,500,700"]');
            if (font) {
                font.parentNode.removeChild(font);
            }
        });

        this.originMarker = new Marker({
            draggable: true,
            position: {lat: 46.957, lng: 7.444},
            map: map,
            title: 'Startpunkt'
        });

        this.destinationMarker = new Marker({
            draggable: true,
            position: {lat: 46.957, lng: 7.444},
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            title: 'Endpunkt'
        });

        this.route.params.subscribe((params) => {
            console.log(params['id']);
            if (params['id']) {
                console.log('load activity');

                this.activityService.get(params['id']).subscribe((action) => {
                    this.getActivity(action.payload);
                });

            }
            else {
                console.log('create activity');

                this.activityService.add(new Activity()).then((ref: DocumentReference) => {
                    ref.onSnapshot((ref) => {
                        this.getActivity(ref);
                    })

                });
            }
        });
    }

    public getActivity(snapshot: DocumentSnapshot) {
        this.activityRef = snapshot;
        let activity = this.activityRef.data();
        activity.timeString = moment(activity.time).format('hh:mm');
        this.originMarker.setPosition(new LatLng(activity.start.latitude, activity.start.longitude));
        this.destinationMarker.setPosition(new LatLng(activity.end.latitude, activity.end.longitude));
        this.map.setCenter(this.originMarker.getPosition());
        this.activityForm.patchValue(activity);

    }

}


