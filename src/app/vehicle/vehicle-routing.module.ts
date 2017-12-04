import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "../auth/auth-guard.service";

import { VehicleCreateComponent } from './create/vehicle-create.component';
import {VehicleListComponent} from "./list/vehicle-list.component";

const activityRoutes: Routes = [
    {path: 'vehicle', canActivate:[AuthGuardService], children: [
        {path: '', redirectTo: 'list', pathMatch: 'full'},
        { path : 'create', component: VehicleCreateComponent },
        { path : 'list', component: VehicleListComponent },
    ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(activityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class VehicleRoutingModule {

}
