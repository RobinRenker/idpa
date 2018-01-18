import {Injectable} from '@angular/core';
import {Activity} from '../interfaces/activity';
import {AuthService} from '../auth/auth.service';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';
import {AngularFirestore} from 'angularfire2/firestore';
import {Vehicle} from "../interfaces/vehicle";

@Injectable()
export class EvaluateService {

    /*https://www.wwf.ch/de/nachhaltig-leben/footprintrechner/resultat*/
    public co2yearavg: number = 4990000; //g schweiz allincluded
    public co2yearmax: number = 4350000; //g ? allincluded
    public transportShare: number = 32; //% des Ausstosses der durch Verkehr verursacht wird

    public activities: Activity[] = [];
    public activityCollection: AngularFirestoreCollection<Activity>;
    public today: Date = new Date();

    constructor(public auth: AuthService, public db: AngularFirestore,) {

        //just get them all
        this.auth.user.subscribe((user) => {
            this.activityCollection = this.db
                .collection<Activity>(
                    'activities',
                    ref => ref.where('author', '==', user.uid)
                );
            this.activityCollection.valueChanges().subscribe((val) => {
                this.activities = val;
            });
        });

    }

    public getAcToday():Activity[]{
        let acs: Activity[] = [];
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(this.today.getDate() == ac.time.getDate() && this.today.getMonth() == ac.time.getMonth() && this.today.getFullYear() == ac.time.getFullYear()){
                acs.push(ac);
            }
        }
        return acs;
    }

    public sumAc(acs:Activity[]): number {
        let res:number = 0;
        for(let i:number = 0; i < acs.length; i++){
            res += acs[i].emissions || 0;
        }
        return res;
    }

    public getAcYear(): Activity[] {
        let date:Date = new Date();
        let acs: Activity[] = [];
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(this.today.getFullYear() == ac.time.getFullYear()){
                acs.push(ac);
            }
        }
        return acs;
    }

    public getAcMonth(): Activity[] {

        let acs: Activity[] = [];
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(this.today.getMonth() == ac.time.getMonth() && this.today.getFullYear() == ac.time.getFullYear()){
                acs.push(ac);
            }
        }
        return acs;
    }
}