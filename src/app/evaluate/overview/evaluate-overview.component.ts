import {Component} from '@angular/core';
import {EvaluateService} from "../../providers/evaluate.service";

@Component({
    selector: 'evaluate-overview',
    templateUrl: './evaluate-overview.component.html',
    styleUrls: ['./evaluate-overview.component.scss']
})

export class EvaluateOverviewComponent {
    constructor(public evaluateService: EvaluateService){}
}


