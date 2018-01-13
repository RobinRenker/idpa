export class Fact{
    public title:string = "";
    public text:string = "";
    public src:string = "";
    public date:string = "";

    constructor(title?:string,text?:string){
        this.text = text;
        this.title = title;
    }
}

export const Facts: Fact[] = [
    new Fact("Auto Herstellung", "Beim herstellen eines Autos wird X Graue energie benötigt was etwa X entspricht"),
    new Fact("Die Herstellung eines Velos","Die Herstellung eines Velos verursacht X was bei einer Lebensdauer von X etwa X pro Tag entspricht")
];
