import { Component } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";

@Component({
    selector: 'vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.scss']
})

export class VehicleListComponent {

    constructor(public vehicleService: VehicleService){}
}


