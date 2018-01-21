import {Vehicle} from "./vehicle";

export class Car extends Vehicle{
    constructor(name:string){
        super(name, 1);
        this.roll = 0.015;
        this.a = 2;
        this.cw = 0.3;
        this.maxPassengers = 4;
        this.weight = 1600;
        this.fuelType = 0;
        this.co2perkm = 100;
        this.liter100km = 5;
        this.greyprodenergy = 22000000;
        this.greyprodco2 = 12000000;
        this.energy100km = 22000;
        this.lifespan = 10;
    }
}

export class Bike extends Vehicle {
    constructor(name: string) {
        super(name, 7);
        this.roll = 0.02;
        this.a = 0.8;
        this.cw = 0.57;
        this.maxPassengers = 1;
        this.weight = 200;
        this.fuelType = 0;
        this.co2perkm = 0;//?
        this.liter100km = 3.5;
        this.energy100km = 0;
        this.lifespan = 10;
        this.greyprodenergy = 0;
        this.greyprodco2 = 0;
    }
}

export class Bus extends Vehicle {
    constructor(name: string) {
        super(name, 6);
        this.roll = 0.01;
        this.a = 6;
        this.cw = 0.33;
        this.maxPassengers = 30;
        this.weight = 10000;
        this.fuelType = 0;
        this.co2perkm = 0;//?
        this.liter100km = 0;//?
        this.greyprodenergy = 0;
        this.greyprodco2 = 0;
        this.energy100km = 0;
        this.lifespan = 10;
    }
}

export class Bicycle extends Vehicle {
    constructor(name: string) {
        super(name, 8);
        this.roll = 0.01; //?
        this.a = 1;
        this.cw = 0.4;
        this.maxPassengers = 1; //?
        this.weight = 20;
        this.greyprodenergy = 0;
        this.greyprodco2 = 0;
        this.lifespan = 10;
    }
}

export class Muscle extends Vehicle {
    constructor(name: string) {
        super(name, 5);
        this.maxPassengers = 1;
    }
}

export class Train extends Vehicle {
    constructor(name: string) {
        super(name, 2);
        this.roll = 0.007;
        this.a = 0;
        this.cw = 0;
        this.maxPassengers = 0;
        this.weight = 0;
        this.fuelType = 2;
        this.co2perkm = 0;//?
        this.liter100km = 0;//?
    }
}

export class Ship extends Vehicle {
    constructor(name: string) {
        super(name, 3);
        this.a = 0;
        this.cw = 0;
        this.maxPassengers = 0;
        this.weight = 0;
        this.fuelType = 0;
        this.co2perkm = 0;//?
        this.liter100km = 0;//?
    }
}

export class Airplane extends Vehicle {
    constructor(name: string) {
        super(name, 4);
        this.a = 0;
        this.cw = 0;
        this.maxPassengers = 0;
        this.weight = 0;
        this.fuelType = 0;
    }
}
