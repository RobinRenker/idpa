import { Injectable } from '@angular/core';
import { Tipp } from '../interfaces/tipp';

@Injectable()
export class TippService {


    public getPersonalTipps(): Tipp[]{
        let t: Tipp[] = [];
        t.push(new Tipp("Walk","you dumb f###"));
        t.push(new Tipp("Dont Fart","Farts are like ... killing the climat"));
        return t;
    }
}