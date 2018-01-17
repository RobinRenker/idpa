import {Component,Input} from '@angular/core';
import {EvaluateService} from "../../providers/evaluate.service";
import {Activity} from "../../interfaces/activity";

@Component({
    selector: 'evaluate-show',
    templateUrl: './evaluate-show.component.html',
    styleUrls: ['./evaluate-show.component.scss']
})

export class EvaluateShowComponent {

    @Input() title: string = "";
    @Input() ac: Activity[] = [];

    constructor(public evaluateService: EvaluateService){

    }

    public getCo2(): number {
        return this.evaluateService.sumAc(this.ac);
    }
}


