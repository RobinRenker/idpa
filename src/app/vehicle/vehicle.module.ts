import {NgModule} from '@angular/core';
import {AppMaterialModule} from '../app.material-module';
import {CommonModule} from '@angular/common';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

import {VehicleRoutingModule} from "./vehicle-routing.module";

import {VehicleCreateComponent} from './create/vehicle-create.component';
import {VehicleListComponent} from "./list/vehicle-list.component";
import {VehicleDetailComponent} from "./detail/vehicle-detail.component";

@NgModule({
    declarations: [
        VehicleCreateComponent,
        VehicleListComponent,
        VehicleDetailComponent
    ],
    imports: [
        VehicleRoutingModule,
        CommonModule,
        AngularFirestoreModule,
        AppMaterialModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
    providers: [
        AuthGuardService,
        AuthService
    ],
})
export class VehicleModule {
}
