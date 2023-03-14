import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent implements OnInit {

  public customer: any;

  constructor( private dialog: MatDialogRef<any>,
               private userService: UserService) { }

  ngOnInit(): void {
  }

  delete(truth: any) {
    if (truth) {
      const res = this.userService.deleteCustomer(this.customer.id);
      // this.dialog.close(truth);
      console.log(res);
    } else {
      this.dialog.close(truth);
      console.log(truth);
    }
  }
}
