import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '../styles/styles.scss';

import { AppRoutingModule } from './app-routing.module';

import { TextService } from './providers/text.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './auth/auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { AuthService } from './auth/auth.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        StartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        TextService,
        AuthGuardService,
        AuthService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class AppModule {

}
