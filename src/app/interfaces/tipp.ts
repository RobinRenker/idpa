import {Vehicle} from "./vehicle";

export class Tipp {

    public title: string = "";
    public text: string = "";
    public vehicles: Vehicle[] = []; //Vehicles it fits to

    constructor(title?:string,text?:string){
        this.title = title;
        this.text = text;
    }
}
