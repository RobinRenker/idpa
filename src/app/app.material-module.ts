import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatProgressSpinnerModule],

    exports:
        [MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatSelectModule, MatFormFieldModule, MatCardModule, MatProgressSpinnerModule],
})
export class AppMaterialModule {

}
