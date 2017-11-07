import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '../styles/styles.scss';

import { AppRoutingModule } from './app-routing.module';

import { TextService } from "./providers/text.service";

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  bootstrap: [
      AppComponent
  ],
  declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [
      TextService,
  ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
})
export class AppModule {

}
