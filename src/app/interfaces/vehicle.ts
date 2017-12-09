export class Vehicle{

    public name: string = "";
    public emissions: number = 0;
    public usage: number = 0;
    public maxPassengers: number = 1; //One Person
    public author: string = "";
    public type: number = 1; //Car

    constructor(type?:number,name?:string,emissions?:number,usage?:number,maxPassengers?:number,author?:string){
        this.type = type;
        this.name = name;
        this.emissions = emissions;
        this.usage = usage;
        this.maxPassengers = maxPassengers;
        this.author = author;
    }

    public calcEmission(distance:number, time?:number, velocity?:number){
        //distance = Meter
        //velocity = Meter/Sekunde
        //time = in Sekunden

        //entweder Zeit oder Geschwindigkeit ... egal welches

        //Return in Gramm.
        return 0;
    }

    public calcEnergy(distance:number, time?:number, velocity?:number){

        //Return in Watt
        return 0;
    }
}