import { Component, Input, HostBinding } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";
import { Vehicle } from "../../interfaces/vehicle";

@Component({
    selector: 'vehicle-detail',
    templateUrl: './vehicle-detail.component.html',
    styleUrls: ['./vehicle-detail.component.scss']
})

export class VehicleDetailComponent {

    @Input() vehicle: Vehicle;
    @HostBinding('class.expanded') expanded: boolean = false;

    constructor(public vehicleService: VehicleService){

    }
}


