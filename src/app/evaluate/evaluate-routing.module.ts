import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluateOverviewComponent } from "./components/overview/evaluate-overview.component";

const EvaluateRoutes: Routes = [
    {path: 'evaluate', component: EvaluateOverviewComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(EvaluateRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EvaluateRoutingModule {

}
