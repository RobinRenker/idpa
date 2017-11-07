import { Injectable } from '@angular/core';

@Injectable()
export class TextService {

    private lang: any;

    constructor(){
        this.lang = require("../config/de.json");
    }

    public getText(key): string {
        let steps = key.split(".");
        return this.readAttr(this.lang,steps);
    }
    private readAttr(data: any, steps: string[]): any {
        try {
            for (let i of steps){
                data = data[i];
            }
        } catch (exception) {
            console.warn("failed to access attr.");
        }
        return data;
    }
}