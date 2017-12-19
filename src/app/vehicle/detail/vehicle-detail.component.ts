import { Component, Input, HostBinding, OnChanges } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";
import { Vehicle } from "../../interfaces/vehicle";
import { Types } from "../../interfaces/type";

@Component({
    selector: 'vehicle-detail',
    templateUrl: './vehicle-detail.component.html',
    styleUrls: ['./vehicle-detail.component.scss']
})

export class VehicleDetailComponent implements OnChanges{

    @Input() id: string;
    @HostBinding('class.expanded') expanded: boolean = false;

    public vehicle: Vehicle = new Vehicle();

    constructor(public vehicleService: VehicleService){
    }

    ngOnChanges(): void {
        this.vehicleService.getVehicle(this.id).subscribe((val) => {
            this.vehicle = val;
        });
    }

    public getIcon(type:number): string{
        let ret: string = "";
        for(var i = 0; i < Types.length; i++){
            if (Types[i].value == type){
                ret = Types[i].icon;
            }
        }
        return ret;
    }
}


