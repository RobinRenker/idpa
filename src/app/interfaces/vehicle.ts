export class Vehicle{

    public name: string;
    public weight:number = null;
    public emissions: number = null;
    public usage: number = null;
    public maxPassengers: number = null;
    public author: string = "";
    public type: number = null;
    public airdensity: number = 1.2;
    public cw: number = null;
    public a: number = null;
    public roll: number = null;
    public g:number = 9.81;
    public co2perkm:number; //gramm ... Liter * 23
    public liter100km:number; //Liter ... gramm / 23
    public greyproduction: number = 0; // Herstellungsausstoss

    public engineType:number; //0 = gas : 1 = hybrid : 2 = electric : 3 = probably muscle or magic

    constructor(name:string,type:number){
        this.type = type;
        this.name = name;
    }
    //Distanz
    public calcEmission(distance:number):string{     //, time?:number, velocity?:number){
        let ret: string = "";
        if (this.co2perkm == undefined || this.co2perkm !> 0){
            if(this.liter100km != undefined && this.liter100km > 0){
                this.co2perkm = this.liter100km * 23; // Faustwert
            } else {
                ret = "Kein Ausstoss";
            }
        }
        if(ret != "Kein Ausstoss"){
            ret = ""+this.co2perkm * distance;
            if (parseInt(ret) > 1000){
                ret = ret + "g";
            } else {
                ret = ret + "kg";
            }
        }
        //distance = Meter
        //velocity = Meter/Sekunde
        //time = in Sekunden

        //entweder Zeit oder Geschwindigkeit ... egal welches

        //Return in Gramm.
        return ret;
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