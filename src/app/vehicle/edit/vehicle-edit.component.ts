import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from "../../interfaces/vehicle";
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Types, Type } from "../../interfaces/type";

@Component({
    selector: 'vehicle-edit',
    templateUrl: './vehicle-edit.component.html',
    styleUrls: ['./vehicle-edit.component.scss']
})

export class VehicleEditComponent implements OnInit{

    public vehicle: Observable<Vehicle>;
    public vehicleForm: FormGroup;
    public new:boolean = false;
    public types: Type[] = Types;

    constructor(public vehicleService: VehicleService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder){

        this.vehicleForm = this.fb.group({
            name: ['', Validators.required],
            maxPassengers: [0, Validators.required],
            type: [0, Validators.required]
        });
    }

    public saveVehicle(): void {
        //Show loading
        this.new = false;
        this.vehicle = undefined;


        let val = this.vehicleForm.value;
        let v: Vehicle = new Vehicle();
        v.name = val.name;
        v.type = val.type;
        v.maxPassengers = val.maxPassengers;
        this.vehicleService.create(v).then((ref: DocumentReference) => {
            ref.onSnapshot((ref) => {
                this.router.navigate(['/vehicle/edit/'+ref.id]);
            });
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params.id.toString().toLocaleLowerCase() == 'new'){
                this.new = true;
                /*this.vehicleService.create({}).then((ref: DocumentReference) => {
                    ref.onSnapshot((ref) => {
                        this.router.navigate(['/vehicle/edit/'+ref.id]);
                    });
                });*/
            } else {
                this.vehicle = this.vehicleService.getVehicle(params.id);
                this.vehicle.subscribe((value) => {
                    this.vehicleForm.patchValue(value, {emitEvent: false});
                });
            }
        });
    }
}


