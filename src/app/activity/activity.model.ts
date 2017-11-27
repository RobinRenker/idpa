import * as firebase from 'firebase';
import GeoPoint = firebase.firestore.GeoPoint;

export class Activity {
    time = new Date();
    start = new GeoPoint(0,0);
    end = new GeoPoint(0,0);
    distance = 44.2;
    vehicle = 44.2;

}