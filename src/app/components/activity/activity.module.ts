


import { ActivityListComponent } from './list/activity-list.component';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../../app.material-module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../../auth/auth-guard.service';
import { AuthService } from '../../auth/auth.service';
import { DistanceService } from '../../providers/distance.service';
import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityEditComponent } from './edit/activity-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ActivityListComponent,
        ActivityEditComponent
    ],
    imports: [
        BrowserModule,
        ActivityRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        AngularFirestoreModule,
        AppMaterialModule,
        HttpClientModule,
        ReactiveFormsModule

    ],
    providers: [
        AuthGuardService,
        AuthService,
        DistanceService
    ],
})
export class ActivityModule {
}
