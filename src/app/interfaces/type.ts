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

export class Fuel {
    public id:number;
    public text:string;
    public prodenergy:number;
    public prodco2:number;
    constructor(id:number,text:string,pe:number,pc:number){
        this.id = id;
        this.text = text;
        this.prodenergy = pe;
        this.prodco2 = pc;
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
export const  Fuels: Fuel[] = [
  new Fuel(0,"Strom",1,0.555),
  new Fuel(1,"Benzin",1580,/*??*/750), //src https://www.autofrage.net/frage/wie-energieaufwaendig-ist-die-herstellung-von-benzin
  new Fuel(2,"Hybrid",790,0)
];