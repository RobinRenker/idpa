import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { DistanceService } from '../../../providers/distance.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'activity-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.scss']
})
/**
 *
 */
export class ActivityEditComponent implements OnInit{

    constructor(public auth: AuthService, private route: ActivatedRoute){
    }

    transport_modes = [
        {name: 'Auto', sound: 'Woof!'},
        {name: 'Zug', sound: 'Meow!'},
        {name: 'Zu Fuss', sound: 'Moo!'},
        {name: 'Flugzeug', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
    ];

    animalControl = new FormControl('', [Validators.required]);



    ngOnInit(){
        this.route.params.subscribe((params)=>{
            console.log(params['id']);
            if(params['id']){
                console.log('load activity');
            }
            else {
                console.log('create activity');
            }
        });
    }


}


