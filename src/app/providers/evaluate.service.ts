import { Injectable } from '@angular/core';

@Injectable()
export class DistanceService {

    /*https://www.wwf.ch/de/nachhaltig-leben/footprintrechner/resultat*/
    public co2yearavg: number = 4990000; //g schweiz allincluded
    public co2yearmax: number = 4350000; //g ? allincluded
    public transportShare: number = 32; //% des Ausstosses der durch Verkehr verursacht wird

    constructor(){

    }
}