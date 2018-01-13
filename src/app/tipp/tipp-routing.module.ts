import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "../auth/auth-guard.service";
import { TippOverviewComponent } from "./overview/tipp-overview.component";



const activityRoutes: Routes = [
    {path: 'tipp', component: TippOverviewComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(activityRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TippRoutingModule {

}
