import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from "../interfaces/vehicle";
import {UserInfo} from 'firebase';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import {AngularFirestoreCollection} from "angularfire2/firestore/collection/collection";
import {AuthService} from "../auth/auth.service";
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { Fuels, Fuel } from "../interfaces/type";

@Injectable()
export class VehicleService {

    public all: Vehicle[] = [];

    public pVehicles: Vehicle[] = [];
    public mVehicles: Vehicle[] = [];

    public publicVehicles: Observable<DocumentChangeAction[]>;
    public myVehicles: Observable<DocumentChangeAction[]>;
    private publicVehicleCollection: AngularFirestoreCollection<Vehicle>;
    private myVehicleCollection: AngularFirestoreCollection<Vehicle>;


    constructor(public db: AngularFirestore, public auth: AuthService){
        auth.user.subscribe((user)=>{
            this.publicVehicleCollection = db.collection<Vehicle>('vehicles', ref => ref.where("public","==",true)/*.where("author","==",user.uid)*/);
            this.myVehicleCollection = db.collection<Vehicle>('vehicles', ref => ref.where("author","==",user.uid));
            this.publicVehicles = this.publicVehicleCollection.snapshotChanges();
            this.myVehicles = this.myVehicleCollection.snapshotChanges();

            this.publicVehicleCollection.valueChanges().subscribe((val) => {
                this.pVehicles = val;
                this.all = this.pVehicles.concat(this.mVehicles);
            });

            this.myVehicleCollection.valueChanges().subscribe((val) => {
                this.mVehicles = val;
                this.all = this.mVehicles.concat(this.pVehicles);
            });
        });
    }

    public getVehicle(id:string): Observable<Vehicle>{
        return this.db.doc<Vehicle>('vehicles/'+id).valueChanges();
    }

    public create(v:Vehicle): Promise<DocumentReference> {
        return this.auth.user.first().toPromise().then((user: UserInfo) => {
            v.author = user.uid;
            return this.db.collection('/vehicles').add({...v});
        });
    }

    public update(id:string,v:Vehicle):void{
        this.auth.user.first().toPromise().then((user: UserInfo) => {
            v.author = user.uid;
            this.db.doc('vehicles/'+id).set({...v});
        });
    }

    public delete(id:string):void {
        this.publicVehicleCollection.doc(id).delete().then(() => {
            console.log(id + " deleted");
        });
    }

    public calcEmission(distance:number, passengers:number, vehicle:Vehicle):number{     //, time?:number, velocity?:number){
        let fuel:number = 0;

        if(vehicle.fuelType == 0 && vehicle.liter100km != undefined){
            fuel = distance * (vehicle.liter100km / 100) * Fuels[vehicle.fuelType].prodco2;
        }

        let co2:number = vehicle.co2perkm * (distance/ 100) + fuel;

        return co2 / passengers;

        //distance = Meter
        //velocity = Meter/Sekunde
        //time = in Sekunden

        //entweder Zeit oder Geschwindigkeit ... egal welches

        //Return in Gramm.
    }
}
