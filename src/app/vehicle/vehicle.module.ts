import {NgModule} from '@angular/core';
import {AppMaterialModule} from '../app.material-module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

import {VehicleRoutingModule} from "./vehicle-routing.module";

import {VehicleListComponent} from "./list/vehicle-list.component";
import {VehicleDetailComponent} from "./detail/vehicle-detail.component";
import {VehicleEditComponent} from "./edit/vehicle-edit.component";

@NgModule({
    declarations: [
        VehicleListComponent,
        VehicleDetailComponent,
        VehicleEditComponent
    ],
    imports: [
        VehicleRoutingModule,
        CommonModule,
        AngularFirestoreModule,
        AppMaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ],
    exports: [
        VehicleDetailComponent
    ]
})
export class VehicleModule {
}
