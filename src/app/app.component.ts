import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    items: Observable<any[]>;

    constructor(public db: AngularFirestore) {
        this.items = db.collection('items').valueChanges(); //load firebase content
    }





}
