import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatSelectModule,
            MatFormFieldModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatMenuModule,
            MatListModule
        ],

    exports:
        [
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            MatSidenavModule,
            MatSelectModule,
            MatFormFieldModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatMenuModule,
            MatListModule
        ],
})
export class AppMaterialModule {

}
