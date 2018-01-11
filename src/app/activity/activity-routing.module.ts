import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './list/activity-list.component';
import { ActivityEditComponent } from './edit/activity-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import {ActivityOverviewComponent} from "./overview/activity-overview.component";

const activityRoutes: Routes = [
    {
        path: 'activities', canActivate: [AuthGuardService], children: [
            {path: '', redirectTo: 'list', pathMatch: 'full'},
            {path: 'list', component: ActivityListComponent},
            {path: 'add', component: ActivityEditComponent},
            {path: 'edit/:id', component: ActivityEditComponent},
        ]
    },
    { path: 'evaluate', component: ActivityOverviewComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(activityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ActivityRoutingModule {

}
