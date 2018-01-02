import {Car,Train,Ship,Airplane,Muscle,Bus,Bike,Bicycle} from "./vehicles";
import {Vehicle} from "./vehicle";

export class Type {

    public value: number;
    public viewValue: string;
    public icon: string;
    public vehicle: Vehicle;

    constructor(v:number, vw:string, ic:string, vehicle:Vehicle){
        this.value = v;
        this.viewValue = vw;
        this.icon = ic;
        this.vehicle = vehicle;
    }
}

export const Types: Type[] = [
    new Type(1,"Auto","car", new Car("")),
    new Type(2,"Zug","train", new Train("")),
    new Type(3,"Schiff","ferry", new Ship("")),
    new Type(4,"Flugzeug","airplane", new Airplane("")),
    new Type(5,"Muskelkraft","human", new Muscle("")),
    new Type(6, "Bus","bus", new Bus("")),
    new Type(7, "Motorrad", "motorbike", new Bike("")),
    new Type(8, "Fahrrad", "bike", new Bicycle("")),
];
