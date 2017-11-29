import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;
import { Vehicle } from './vehicle';

export interface Activity {
    time: Date;
    start: GeoPoint;
    end: GeoPoint;
    distance: number;
    vehicle: Vehicle;
    passengers: number;
    usage: number;
    emissions: number;
    author: string;
}