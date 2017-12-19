export class Type {

    public value: number;
    public viewValue: string;
    public icon: string;

    constructor(v:number, vw:string, ic:string){
        this.value = v;
        this.viewValue = vw;
        this.icon = ic;
    }
}

export const Types: Type[] = [
    new Type(1,"Auto","car"),
    new Type(2,"Zug","train"),
    new Type(3,"Schiff","ferry"),
    new Type(4,"Flugzeug","airplane"),
    new Type(5,"Muskelkraft","human"),
    new Type(6, "Bus","bus"),
];