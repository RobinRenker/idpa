import {Component} from '@angular/core';
import {EvaluateService} from "../../providers/evaluate.service";

@Component({
    selector: 'evaluate-overview',
    templateUrl: './evaluate-overview.component.html',
    styleUrls: ['./evaluate-overview.component.scss']
})

export class EvaluateOverviewComponent {
    constructor(public evaluateService: EvaluateService){}
    maxPerYear = 2.5 * 1000000; //2.5 Tonnen
    maxPerYearTransport = this.maxPerYear / 3;
    maxPerMonthTransport = this.maxPerYearTransport/12;
    maxPerDayTransport = this.maxPerYearTransport / 365;
}


