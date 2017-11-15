import {
    MatButtonModule, MatIconModule, MatIconRegistry, MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [MatButtonModule, MatToolbarModule, MatIconModule],

    exports:
        [MatButtonModule, MatToolbarModule, MatIconModule],
})
export class AppMaterialModule {


}
