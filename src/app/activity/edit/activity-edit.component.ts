import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { DistanceService } from '../../providers/distance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../../interfaces/activity';
import { ActivityService } from '../../providers/activity.service';
import { default as firebase } from 'firebase';
import * as moment from 'moment';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import Marker = google.maps.Marker;
import Map = google.maps.Map;
import DistanceMatrixResponseElement = google.maps.DistanceMatrixResponseElement;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import DocumentReference = firebase.firestore.DocumentReference;
import GeoPoint = firebase.firestore.GeoPoint;
import LatLng = google.maps.LatLng;
import Geocoder = google.maps.Geocoder;
import GeocoderStatus = google.maps.GeocoderStatus;
import GeocoderResult = google.maps.GeocoderResult;
import { Subject } from 'rxjs/Subject';
import { VehicleService } from '../../providers/vehicle.service';

@Component({
    selector: 'activity-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.scss']
})
/**
 *
 */
export class ActivityEditComponent implements OnInit {

    public showPosition = false;

    constructor(public auth: AuthService, private route: ActivatedRoute, public dist: DistanceService, public activityService: ActivityService, public fb: FormBuilder, public vehicleService: VehicleService, public router: Router) {

        this.activityForm = this.fb.group({
            time: ['', Validators.required],
            timeString: ['', Validators.required],
            start: ['', Validators.required],
            startString: ['Bern', Validators.required],
            end: ['', Validators.required],
            endString: ['Zürich', Validators.required],
            distance: [0, Validators.required],
            passengers: [1, Validators.required],
            vehicle: ['', Validators.required]
        });

        //check if device Location can be used
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res => {
                this.showPosition = true;
            }));
        }



    }

    public useCurrentLocation(start: boolean) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res => {
                console.log(res);
                let location = new LatLng(res.coords.latitude, res.coords.longitude);
                if (start) {
                    this.originMarker.setPosition(location);
                }
                else {
                    this.destinationMarker.setPosition(location);
                }

                this.geocoder.geocode({location: location}, (results, status) => {
                    console.log(results);
                    if (status == GeocoderStatus.OK) {
                        let address = results[0].formatted_address;

                        if (start) {
                            this.activityForm.patchValue({startString: address});
                        }
                        else {
                            this.activityForm.patchValue({endString: address});
                        }

                    } else {
                        console.log(status);
                    }

                });
            }));
        }
    }

    public calc() {
        this.dist.getDistance(this.originMarker.getPosition(), this.destinationMarker.getPosition()).then((res) => {
            console.log(res);
            this.distance = res;
            this.activityForm.patchValue({distance: Math.round(res.distance.value / 100) / 10})
        });
    }

    public originMarker: Marker;
    public originOptions: GeocoderResult[] = [];
    public destinationMarker: Marker;
    public destinationOptions: GeocoderResult[] = [];
    public map: Map;
    public geocoder: Geocoder;
    public distance: DistanceMatrixResponseElement;

    public activityForm: FormGroup;
    public activityRef: DocumentSnapshot;

    ngOnInit() {

        let map = new Map(document.getElementById('map'), {
            center: {lat: 46.957, lng: 7.444},
            zoom: 8,
            disableDefaultUI: true,

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
            position: {lat: 46.957, lng: 7.444},
            map: map,
            title: 'Startpunkt'
        });

        this.destinationMarker = new Marker({
            position: {lat: 47.376, lng: 8.541},
            map: map,
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            title: 'Endpunkt'
        });

        this.geocoder = new Geocoder();

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
                        //this.router.navigate(["/activities/edit",ref.id]);
                    })

                });
            }
        });

    }

    public searchLocation(address: string, isStart: boolean): Promise<GeocoderResult[]> {

        return new Promise((resolve, reject) => {
            this.geocoder.geocode({'address': address, componentRestrictions: {country: 'CH'}}, (results, status) => {

                if (status == GeocoderStatus.OK) {
                    let position = results[0].geometry.location;
                    this.map.setCenter(position);
                    this.map.setZoom(15);
                    if (isStart) {
                        this.originMarker.setPosition(position);
                    } else {
                        this.destinationMarker.setPosition(position);
                    }
                    this.calc();

                } else {
                    console.log(status);
                }
                resolve(results);
            });
        });
    }

    public getActivity(snapshot: DocumentSnapshot) {
        this.activityRef = snapshot;
        let activity = this.activityRef.data();
        activity.timeString = moment(activity.time).format('hh:mm');
        this.originMarker.setPosition(new LatLng(activity.start.latitude, activity.start.longitude));
        this.destinationMarker.setPosition(new LatLng(activity.end.latitude, activity.end.longitude));
        this.map.setCenter(this.originMarker.getPosition());
        this.map.setZoom(8);
        this.activityForm.patchValue(activity, {emitEvent: false});

        this.activityForm.get('startString').valueChanges.debounceTime(1000).subscribe((value => {
            console.log(value);

            this.searchLocation(value, true).then((res) => {
                console.log(res);
                return this.originOptions = res;
            })

        }));

        this.activityForm.get('endString').valueChanges.debounceTime(1000).subscribe((value => {
            console.log(value);
            console.log(activity.endString);

            this.searchLocation(value, false).then((res) => {
                console.log(res);
                return this.destinationOptions = res;
            })

        }));

    }

    public saveActivity() {

        let values = this.activityForm.value;
        let activity = new Activity();
        activity.vehicle = values.vehicle;
        let date = moment(values.time);
        activity.start = new GeoPoint(this.originMarker.getPosition().lat(), this.originMarker.getPosition().lng());
        activity.startString = values.startString;
        activity.end = new GeoPoint(this.destinationMarker.getPosition().lat(), this.destinationMarker.getPosition().lng());
        activity.endString = values.endString;
        activity.time = moment(date.format('YYYY-MM-DD') + ' ' + values.timeString).toDate();
        activity.distance = values.distance;
        activity.passengers = values.passengers;
        this.activityRef.ref.update({...activity});
    }

}


