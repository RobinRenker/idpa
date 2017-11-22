import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app.material-module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService } from '../auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicleRoutingModule } from "./vehicle-routing.module";

import { VehicleCreateComponent } from './create/vehicle-create.component';
import { VehicleListComponent } from "./list/vehicle-list.component";

@NgModule({
    declarations: [
        VehicleCreateComponent,
        VehicleListComponent
    ],
    imports: [
        VehicleRoutingModule,
        CommonModule,
        AngularFirestoreModule,
        AppMaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FlexLayoutModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ],
})
export class VehicleModule {
}
