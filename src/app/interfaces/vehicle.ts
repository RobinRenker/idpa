export class Vehicle{

    public name: string;
    public weight:number;
    public emissions: number;
    public usage: number;
    public maxPassengers: number;
    public author: string = "";
    public type: number;
    public airdensity: number = 1.2;
    public cw: number;
    public a: number;
    public roll: number;
    public g:number = 9.81;

    public engineType:number; //0 = gas : 1 = hybrid : 2 = electric : 3 = probably muscle or magic

    constructor(name:string,type:number){
        this.type = type;
        this.name = name;
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
    public calcAirResistance(v:number):number{
        //v = Velocity in m/s
        return 0.5 * this.a * this.airdensity * (v*v) * this.cw;
        /*
        https://de.wikipedia.org/wiki/Str%C3%B6mungswiderstandskoeffizient
        http://www.mx-electronic.com/pdf/Energie_f%C3%BCr_100_km_A.pdf
        http://www.cw-wert.de/
        Motorrad verkleidet 0,79 m² 0,57 224 N
        Motorrad unverkleidet 0,81 m² 0,63 254 N
        Kleinwagen 1,80 m² 0,32 287 N
        Mittelklasse 2,00 m² 0,28 279 N
        */
    }
    public calcRollResistance():number {
        return this.roll * this.g * this.weight;
    }
    public calcA(width:number,height:number):number {
        return width*height*0.8; //über den Daumen gerechnet
    }
}