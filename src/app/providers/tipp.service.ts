import { Injectable } from '@angular/core';
import { Tipp } from '../interfaces/tipp';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from "../auth/auth.service";
import {AngularFirestoreCollection} from "angularfire2/firestore/collection/collection";

@Injectable()
export class TippService {

    /*public tipps: Observable<DocumentChangeAction[]>;
    public facts: Observable<DocumentChangeAction[]>;*/
    public tipps: Tipp[] = [];
    public facts: Tipp[] = [];
    private tippsCollection: AngularFirestoreCollection<Tipp>;
    private factsCollection: AngularFirestoreCollection<Tipp>;

    constructor(public db: AngularFirestore, public auth: AuthService){
        auth.user.subscribe((user)=>{
            this.tippsCollection = db.collection<Tipp>('tipps', ref => ref.where("type","==",0));
            this.factsCollection = db.collection<Tipp>('tipps', ref => ref.where("type","==",1));
            this.tippsCollection.valueChanges().subscribe((val) => {
                this.tipps = val;
            });
            this.factsCollection.valueChanges().subscribe((val) => {
                this.facts = val;
            });
        });

        setInterval(() => {
            console.log(this.tipps);
        },2000);
    }

    public getPersonalTipps(): Tipp[]{
        return this.tipps;
    }
    public getFacts(): Tipp[]{
        return this.facts;
    }
}