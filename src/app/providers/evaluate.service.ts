import {Injectable} from '@angular/core';
import {Activity} from '../interfaces/activity';
import {AuthService} from '../auth/auth.service';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class EvaluateService {

    /*https://www.wwf.ch/de/nachhaltig-leben/footprintrechner/resultat*/
    public co2yearavg: number = 4990000; //g schweiz allincluded
    public co2yearmax: number = 4350000; //g ? allincluded
    public transportShare: number = 32; //% des Ausstosses der durch Verkehr verursacht wird

    public activities: Activity[] = [];
    public activityCollection: AngularFirestoreCollection<Activity>;

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

        setInterval(() => {
            let x: Date = new Date();
            console.log(this.sumDay(x));
        },1000);
    }

    public sumDay(date:Date): void {
        let res:number = 0;
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(date.getDate() == ac.time.getDate() && date.getMonth() == ac.time.getMonth() && date.getFullYear() == ac.time.getFullYear()){
                res += ac.emissions;
            }
        }
    }

    public sumYear(date:Date): number {
        let res:number = 0;
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(date.getFullYear() == ac.time.getFullYear()){
                res += ac.emissions;
            }
        }
        return res;
    }

    public sumMonth(date:Date): number {
        let res:number = 0;
        for(let i:number = 0; i < this.activities.length; i++){
            let ac:Activity = this.activities[i];
            if(date.getMonth() == ac.time.getMonth() && date.getFullYear() == ac.time.getFullYear()){
                res += ac.emissions;
            }
        }
        return res;
    }

    private getDate(date:date):number{
        var dd = date.getDate();
        var mm = date.getMonth()+1; //January is 0!
        var yyyy = date.getFullYear();
        return a
    }
}