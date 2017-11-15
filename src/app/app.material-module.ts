import {
     MatButtonModule
} from '@angular/material';
import { NgModule } from '@angular/core';


/**
 * Custom Module for Material Components
 */
@NgModule({
    imports:
        [MatButtonModule],

    exports:
        [MatButtonModule],
})
export class AppMaterialModule {
}
