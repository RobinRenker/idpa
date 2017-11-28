import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Activity } from './activity.model';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()
export class ActivityService {
    constructor(private db: AngularFirestore) { }

}