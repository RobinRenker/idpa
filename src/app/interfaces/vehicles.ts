import {Vehicle} from "./vehicle";

export class Car extends Vehicle{
    constructor(name:string){
        super(name, 1);
        this.roll = 0.015;
        this.a = 2;
        this.cw = 0.3;
        this.maxPassengers = 4;
        this.weight = 1600;
        this.engineType = 0;
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
        this.engineType = 0;
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
        this.engineType = 0;
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
        this.engineType = 3;
    }
}

export class Muscle extends Vehicle {
    constructor(name: string) {
        super(name, 5);
        this.maxPassengers = 1;
        this.engineType = 3;
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
        this.engineType = 2;
    }
}

export class Ship extends Vehicle {
    constructor(name: string) {
        super(name, 3);
        this.roll = 0;
        this.a = 0;
        this.cw = 0;
        this.maxPassengers = 0;
        this.weight = 0;
        this.engineType = 0;
    }
}

export class Airplane extends Vehicle {
    constructor(name: string) {
        super(name, 4);
        this.roll = 0;
        this.a = 0;
        this.cw = 0;
        this.maxPassengers = 0;
        this.weight = 0;
        this.engineType = 0;
    }
}
