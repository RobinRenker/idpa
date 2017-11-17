import { Injectable } from '@angular/core';
import {} from '@types/googlemaps';
import TransitOptions = google.maps.TransitOptions;
import DrivingOptions = google.maps.DrivingOptions;
import UnitSystem = google.maps.UnitSystem;
import TravelMode = google.maps.TravelMode;
import LatLng = google.maps.LatLng;
import DistanceMatrixResponseElement = google.maps.DistanceMatrixResponseElement;
import DistanceMatrixStatus = google.maps.DistanceMatrixStatus;

@Injectable()
export class DistanceService {

    private lang: any;

    constructor() {
        this.lang = require('../config/de.json');
    }

    public getDistance(origin: LatLng, destination: LatLng): Promise<DistanceMatrixResponseElement> {
        return new Promise(function (resolve, reject) {
            var service = new google.maps.DistanceMatrixService();
            var origin1 = new LatLng(55.930385, -3.118425);
            var destinationA = new LatLng(50.087692, 14.421150);
            service.getDistanceMatrix(
                {
                    origins: [origin1],
                    destinations: [destinationA],
                    travelMode: TravelMode.DRIVING,
                    unitSystem: UnitSystem.METRIC,
                    avoidHighways: false,
                    avoidTolls: false,
                }, (response,status) => {
                    if(status === DistanceMatrixStatus.OK){
                        let distance = response.rows[0].elements[0];
                        resolve(distance);
                    }
                    else {
                        reject(response);
                    }

                });
        });

    }
}