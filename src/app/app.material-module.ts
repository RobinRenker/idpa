import {
    MatButtonModule, MatIconModule, MatIconRegistry, MatSidenavModule, MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule],

    exports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule],
})
export class AppMaterialModule {


}
