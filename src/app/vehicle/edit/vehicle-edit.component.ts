import { Component, OnInit } from '@angular/core';
import { VehicleService } from "../../providers/vehicle.service";
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from "../../interfaces/vehicle";
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Types, Type, Fuels, Fuel } from "../../interfaces/type";

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
    public fuels: Fuel[] = Fuels;
    public id:string = undefined;

    constructor(public vehicleService: VehicleService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder){

        this.vehicleForm = this.fb.group({
            name: ['', Validators.required],
            type: [undefined, Validators.required],
            //emissions: [0, Validators.required],
            //usage: [0, Validators.required]
            weight: [undefined, Validators.required],
            roll: [undefined, Validators.required],
            cw: [undefined, Validators.required],
            a: [undefined, Validators.required],
            g: [undefined, Validators.required],
            airdensity: [undefined, Validators.required],
            maxPassengers: [undefined, Validators.required],
            co2perkm: [undefined, Validators.required],
            liter100km: [undefined, Validators.required],
            fuel: [undefined, Validators.required],
            energy100km: [undefined, Validators.required],
            lifespan: [undefined, Validators.required]
        });
    }

    public changeType(): void {
        let val:any = this.vehicleForm.value;
        let vehicle:Vehicle;
        for(let i = 0; i < Types.length; i++){
            if(Types[i].value == val.type){
                vehicle = Types[i].vehicle;
            }
        }

        vehicle.name = val.name;
        this.vehicleForm.patchValue(vehicle, {emitEvent:false});
    }

    public saveVehicle(): void {

        /*let val = this.vehicleForm.value;
        let v: Vehicle = new Vehicle(val.name,val.type);
        v.maxPassengers = val.maxPassengers;
        v.emissions = val.emissions;
        v.usage = val.usage;*/

        let v:Vehicle = this.vehicleForm.getRawValue();

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
            this.vehicleService.update(this.id,v);
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


