import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material-module';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import '../styles/styles.scss';

import { environment } from '../environments/environment';

import { TextService } from './providers/text.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { NavService } from './providers/nav.service';
import { DistanceService } from './providers/distance.service';
import { VehicleService } from './providers/vehicle.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { NoContentComponent } from './components/no-content/no-content.component';
import { ActivityModule } from './activity/activity.module';
import { VehicleModule } from "./vehicle/vehicle.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        StartComponent,
        SidenavComponent,
        NoContentComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        AppMaterialModule,
        HttpClientModule,
        ActivityModule,
        VehicleModule,
        AppRoutingModule
    ],
    providers: [
        TextService,
        AuthGuardService,
        AuthService,
        NavService,
        DistanceService,
        VehicleService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class AppModule {
    constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
        matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'))
    }
}
