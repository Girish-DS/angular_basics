import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService {

    content = new Subject<any> ();

    shareData(message: any) {
        this.content.next(message);
    }
}