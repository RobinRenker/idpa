import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: ['./vehicle-list.component.scss']
})

export class VehicleListComponent {

    public vehicles: Observable<any[]>;

    constructor(public db: AngularFirestore){
        this.vehicles = db.collection('vehicles').valueChanges();
    }
}


