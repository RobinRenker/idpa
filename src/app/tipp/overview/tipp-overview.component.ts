import {Component} from '@angular/core';
import {TippService} from "../../providers/tipp.service";
import {Fact, Facts} from "../../interfaces/fact";
import {Tipp} from "../../interfaces/tipp";
@Component({
    selector: 'tipp-overview',
    templateUrl: './tipp-overview.component.html',
    styleUrls: ['./tipp-overview.component.scss']
})

export class TippOverviewComponent {

    public facts: Fact[] = Facts;
    public tipps: Tipp = [];

    constructor(public tippService:TippService){
        this.tipps = tippService.getPersonalTipps();
    }
}


