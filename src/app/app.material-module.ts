import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconRegistry,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSliderModule,
    MatExpansionModule, MatSnackBarModule, MatProgressBarModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

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
            MatDatepickerModule,
            MatAutocompleteModule,
            MatTabsModule,
            MatSliderModule,
            MatSnackBarModule,
            MatExpansionModule
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
            MatDatepickerModule,
            MatAutocompleteModule,
            MatTabsModule,
            MatSliderModule,
            MatSnackBarModule,
            MatProgressBarModule,
            MatExpansionModule
        ],
})
export class AppMaterialModule {

}
