import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateOverviewComponent } from "./overview/evaluate-overview.component";



const activityRoutes: Routes = [
    {path: 'overview', component: EvaluateOverviewComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(activityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EvaluateRoutingModule {

}
