import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore/collection/collection';
import { Activity } from '../interfaces/activity';
import { AuthService } from '../auth/auth.service';
import { Vehicle } from '../interfaces/vehicle';
@Injectable()
export class ActivityService {

    public activities: Observable<Activity[]>;
    private activityCollection: AngularFirestoreCollection<Activity>;

    constructor(public db: AngularFirestore, auth: AuthService){
        auth.user.subscribe((user)=>{
            this.activityCollection = db.collection<Activity>('activities', ref => ref.where("author","==",user.uid));
            this.activities = this.activityCollection.valueChanges();
        });


    }

}