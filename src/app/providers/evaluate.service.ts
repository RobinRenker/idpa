import {Injectable} from '@angular/core';
import {Activity} from '../interfaces/activity';
import {AuthService} from '../auth/auth.service';
import {AngularFirestoreCollection} from 'angularfire2/firestore/collection/collection';
import {AngularFirestore} from 'angularfire2/firestore';
import {Vehicle} from "../interfaces/vehicle";
import {VehicleService} from "./vehicle.service";

@Injectable()
export class EvaluateService {

    /*https://www.wwf.ch/de/nachhaltig-leben/footprintrechner/resultat*/
    public co2yearavg: number = 4990000; //g schweiz allincluded
    public co2yearmax: number = 4350000; //g ? allincluded
    public transportShare: number = 32; //% des Ausstosses der durch Verkehr verursacht wird

    public activities: Activity[] = [];
    public activityCollection: AngularFirestoreCollection<Activity>;
    public today: Date = new Date();

    constructor(public auth: AuthService, public db: AngularFirestore, public vehicleService: VehicleService) {

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

    public sumProd(acs:Activity[]):number{
        let ret:number = 0;
        let vs: Vehicle[] = [];
        for(let a = 0; a< acs.length; a++){

            let found:boolean = true;

            //vehicles already in vs
            for(let f = 0; f < vs.length; f ++){
                if(vs[f].id == acs[a].vehicle){
                    found = false;
                    break;
                }
            }

            //vehicles not yet found (true)
            if(found){
                for(let v = 0; v < this.vehicleService.all.length; v++){
                    if(acs[a].vehicle == this.vehicleService.all[v].id){
                        vs.push(this.vehicleService.all[v]);
                        break;
                    }
                }
            }
        }
        console.log(vs);
        for(let v = 0; v < vs.length; v++){
            if(vs[v].greyprodco2 > 0 && vs[v].lifespan > 0){
                ret = ret + vs[v].greyprodco2 / (vs[v].lifespan * 365);
            }
        }

        return ret;
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