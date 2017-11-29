import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from "../interfaces/vehicle";
import {AngularFirestoreCollection} from "angularfire2/firestore/collection/collection";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class VehicleService {

    public publicVehicles: Observable<Vehicle[]>;
    public myVehicles: Observable<Vehicle[]>;
    private publicVehicleCollection: AngularFirestoreCollection<Vehicle>;
    private myVehicleCollection: AngularFirestoreCollection<Vehicle>;


    constructor(public db: AngularFirestore, auth: AuthService){
        auth.user.subscribe((user)=>{
            this.publicVehicleCollection = db.collection<Vehicle>('vehicles', ref => ref.where("public","==",true)/*.where("author","==",user.uid)*/);
            this.myVehicleCollection = db.collection<Vehicle>('vehicles', ref => ref.where("author","==",user.uid));
            this.publicVehicles = this.publicVehicleCollection.valueChanges();
            this.myVehicles = this.myVehicleCollection.valueChanges();
        });


    }

    public getVehicle(id:string): Observable<Vehicle>{
        return this.db.doc<Vehicle>('vehicles/'+id).valueChanges();
    }
}