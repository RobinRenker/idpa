import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;
import { Vehicle } from './vehicle';

export class Activity {

    constructor() {
        this.time = new Date();
        this.vehicle = 'ep9RkMoIFfxOHclzG6Qm';
        this.start = new GeoPoint(46.957, 7.444);
        this.end = new GeoPoint(47.376, 8.541);

    }

    time: Date;
    start: GeoPoint;
    startString: string;
    end: GeoPoint;
    endString: string;
    distance: number;
    vehicle: string;
    passengers: number;
    usage: number;
    emissions: number;
    author: string;
}