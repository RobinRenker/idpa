import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from "../interfaces/vehicle";
import {AngularFirestoreCollection} from "angularfire2/firestore/collection/collection";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class VehicleService {

    public vehicles: Observable<Vehicle[]>;
    private itemsCollection: AngularFirestoreCollection<Vehicle>;


    constructor(public db: AngularFirestore, auth: AuthService){
        auth.user.subscribe((user)=>{
            console.log(user.uid);
            this.itemsCollection = db.collection<Vehicle>('vehicles', ref => ref.where("public","==",true)/*.where("author","==",user.uid)*/);
            this.vehicles = this.itemsCollection.valueChanges();
        });
        console.log("bla");


    }

    public getVehicle(id:string): Observable<Vehicle>{
        return this.db.doc<Vehicle>('vehicles/'+id).valueChanges();
    }
}