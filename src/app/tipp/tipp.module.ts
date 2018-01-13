import {NgModule} from '@angular/core';
import {AppMaterialModule} from '../app.material-module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from '../auth/auth-guard.service';
import {AuthService} from '../auth/auth.service';
import {ReactiveFormsModule} from '@angular/forms';

import {TippRoutingModule} from "./tipp-routing.module";
import {TippOverviewComponent} from "./overview/tipp-overview.component";



@NgModule({
    declarations: [
        TippOverviewComponent
    ],
    imports: [
        TippRoutingModule,
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

    ]
})
export class TippModule {
}
