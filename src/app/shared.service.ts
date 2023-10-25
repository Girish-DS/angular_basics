import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService {

    constructor() {
        setTimeout(() => {
            this.obj['name'] = 'hsdvwe'
        }, 5000)
    }

    content = new Subject<any>();

    public obj = {
        name: 'Venkat',
        role: 'developer'
    }

    shareData(message: any) {
        this.content.next(message);
    }
}