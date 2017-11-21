import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './list/activity-list.component';
import { ActivityEditComponent } from './edit/activity-edit.component';


const activityRoutes: Routes = [
    { path: '', component: ActivityListComponent },
    { path: 'activities',  component: ActivityListComponent },
    { path: 'activity/:id', component: ActivityEditComponent },
    { path: 'activity', component: ActivityEditComponent },
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
