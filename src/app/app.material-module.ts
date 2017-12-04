import {
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatListModule, MatInputModule, MatDatepickerModule
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
            MatListModule,
            MatInputModule,
            MatDatepickerModule
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
            MatListModule,
            MatInputModule,
            MatDatepickerModule
        ],
})
export class AppMaterialModule {

}
