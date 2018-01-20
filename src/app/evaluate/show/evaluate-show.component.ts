import {Component, Input} from '@angular/core';
import {EvaluateService} from "../../providers/evaluate.service";
import {Activity} from "../../interfaces/activity";
import {VehicleService} from "../../providers/vehicle.service";
import {Vehicle} from "../../interfaces/vehicle";

@Component({
    selector: 'evaluate-show',
    templateUrl: './evaluate-show.component.html',
    styleUrls: ['./evaluate-show.component.scss']
})

export class EvaluateShowComponent {

    @Input() title: string = "";
    @Input() ac: Activity[] = [];
    @Input() maxValue: number = 1;
    @Input() days: number = 1;

    public summedAc:number = 0;
    public vehicles: Vehicle[] = [];

    constructor(public evaluateService: EvaluateService, public vehicleService: VehicleService){

    }

    public getCo2(): number {
        this.summedAc = this.evaluateService.sumAc(this.ac);
        return this.summedAc;
    }

    public getPercent(): number {
        return this.getCo2() / this.maxValue * 100;
    }
}


