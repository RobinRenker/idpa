import {
    MatButtonModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatSelectModule, MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule],

    exports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule],
})
export class AppMaterialModule {


}
