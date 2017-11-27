import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Activity } from './activity.model';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()
export class ActivityService {
    constructor(private db: AngularFirestore) { }
    /// Creates an Ad, then returns as an object
    createActivity(){
        let activityDef = new Activity();
        const adKey = this.db.collection('activities').push(adDefault).key
        return this.db.object('/ads/' + adKey)
    }
    /// Updates an existing Ad
    updateAd(ad: FirebaseObjectObservable<AdListing>, data: any) {
        return ad.update(data)
    }
}