export class Type {

    public value: number;
    public viewValue: string;

    constructor(v:number, vw:string){
        this.value = v;
        this.viewValue = vw;
    }
}

export const Types: Type[] = [
    new Type(1,"Auto"),
    new Type(2,"Zug"),
    new Type(3,"Schiff"),
    new Type(4,"Flugzeug"),
    new Type(5,"Muskelkraft"),
    new Type(6, "Bus"),
];