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
    public id:string = undefined;

    constructor(public vehicleService: VehicleService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder){

        this.vehicleForm = this.fb.group({
            name: ['', Validators.required],
            maxPassengers: [0, Validators.required],
            type: [0, Validators.required],
            emissions: [0, Validators.required],
            usage: [0, Validators.required]
        });
    }

    public saveVehicle(): void {

        let val = this.vehicleForm.value;
        let v: Vehicle = new Vehicle(val.name,val.type);
        v.maxPassengers = val.maxPassengers;
        v.emissions = val.emissions;
        v.usage = val.usage;

        if(this.new){
            this.vehicle = undefined;
            this.new = false;
            //Show loading
            this.vehicleService.create(v).then((ref: DocumentReference) => {
                ref.onSnapshot((ref) => {
                    this.router.navigate(['/vehicle/edit/'+ref.id]);
                });
            });
        } else {
            this.vehicleService.update(this.id,v).then((ref: DocumentReference)=> {
                this.router.navigate(['/vehicle/edit/'+this.id]);
            });
        }
    }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params.id.toString();
            if(this.id.toLocaleLowerCase() == 'new'){
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


