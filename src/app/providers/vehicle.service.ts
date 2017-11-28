import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from "../interfaces/vehicle";

@Injectable()
export class VehicleService {

    //public vehicles: Observable<Vehicle[]>;
    public vehicles: Vehicle[] = undefined;

    constructor(public db: AngularFirestore){
        let obs: Observable<any[]> = db.collection('vehicles', ref => ref.where("public","==",true)).valueChanges();

        obs.subscribe((value) => {
            let tmpv: Vehicle[] = [];
            for(let i = 0; i < value.length; i++){
                tmpv.push(new Vehicle(
                    value[i].type,
                    value[i].name,
                    value[i].emissions,
                    value[i].usage,
                    value[i].maxPassengers,
                    value[i].author
                ));
            }
            this.vehicles = tmpv;
        });
    }

    public getVehicle(id:string): Observable<Vehicle>{
        return this.db.doc<Vehicle>('vehicles/'+id).valueChanges();
    }
}