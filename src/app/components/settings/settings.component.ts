import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

    public settingsForm: FormGroup;
    public energyTypes: any[] = [];

    constructor(public fb: FormBuilder,){

        this.energyTypes.push({txt:"Atom",id:1});
        this.energyTypes.push({txt:"Kohle und Öl",id:2});
        this.energyTypes.push({txt:"Erneuerbar",id:3});

        this.settingsForm = this.fb.group({
            test: ['', Validators.required],
            etype: ['', Validators.required],
        });
    }
}


