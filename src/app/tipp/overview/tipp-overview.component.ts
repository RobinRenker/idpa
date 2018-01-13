import {Component} from '@angular/core';
import {TippService} from "../../providers/tipp.service";
import {Fact, Facts} from "../../interfaces/fact";

@Component({
    selector: 'tipp-overview',
    templateUrl: './tipp-overview.component.html',
    styleUrls: ['./tipp-overview.component.scss']
})

export class TippOverviewComponent {

    public facts: Fact[] = Facts;

    constructor(public tippService:TippService){

    }
}


