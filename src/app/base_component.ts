import { Injector } from "@angular/core";
import { ToastrService } from "ngx-toastr";

export abstract class BaseComponent {

    public toastr: ToastrService;

    constructor(inject: Injector) {
      this.toastr = inject.get(ToastrService)
    }
    
}