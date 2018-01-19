export class Tipp {

    public title: string = "";
    public text: string = "";
    public vehicles: any[] = []; //Vehicles it fits to
    public src: string = "";

    constructor(title?:string,text?:string){
        this.title = title;
        this.text = text;
    }
}
