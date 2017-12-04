import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;
import { Vehicle } from './vehicle';

export class Activity {

    constructor(){
        this.time = new Date();
        this.vehicle = "";

    }

    time: Date;
    start: GeoPoint;
    end: GeoPoint;
    distance: number;
    vehicle: string;
    passengers: number;
    usage: number;
    emissions: number;
    author: string;
}