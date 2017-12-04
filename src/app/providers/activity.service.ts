import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore/collection/collection';
import { Activity } from '../interfaces/activity';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import { UserInfo } from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import { Action, DocumentChangeAction } from 'angularfire2/firestore/interfaces';

@Injectable()
export class ActivityService {

    public activities: Observable<DocumentChangeAction[]>;
    private activityCollection: AngularFirestoreCollection<Activity>;

    constructor(public db: AngularFirestore, public auth: AuthService) {
        auth.user.subscribe((user) => {
            this.activityCollection = db.collection<Activity>('activities', ref => ref.where('author', '==', user.uid).orderBy('time', 'desc'));
            this.activities = this.activityCollection.snapshotChanges();
        });

    }

    public add(activity: Activity): Promise<DocumentReference> {
        return this.auth.user.first().toPromise().then((user: UserInfo) => {
            activity.author = user.uid;
            console.log(user.uid);
            return this.db.collection('/activities').add({...activity});
        });

    }



    public get(id: string): Observable<Action<DocumentSnapshot>> {
        return this.db.doc("activities/"+id).snapshotChanges();
    }



}