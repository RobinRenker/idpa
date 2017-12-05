import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vehicle-edit',
    templateUrl: './vehicle-edit.component.html',
    styleUrls: ['./vehicle-edit.component.scss']
})

export class VehicleEditComponent implements OnInit{

    constructor(public vehicleService: VehicleService, private route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            console.log(params['id']);
        });
    }
}


