import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent implements OnInit {

  /**
   * These are Property Decorators, Where "Input" gets the value from a component.
   * "Output" emits/returns the value from this component to another. 
   */
  @Input() inItData: any;
  @Input() edit: any;
  @Output() output = new EventEmitter();

  public sex = ['Male', 'Female', 'Others'];

  public customerDetails: any;
  public name = '';
  public phoneNumber = '';
  public age = '';
  public email = '';
  public id = '';
  // public edit: any;

  constructor( private router: Router,
               private route: ActivatedRoute,
               private userService: UserService ) { }

  ngOnInit(): void {
    /**
     * Id/data can be pass in the URL and get it in the params from the destination component.
     * Down return code is got the data from the home from params.
     * 
    this.route.queryParams.subscribe( (res: any) => {
      this.edit = JSON.parse(res.edit);
      this.customerDetails = JSON.parse(res.data);
    })
    if (this.customerDetails) {
      this.id = this.customerDetails.id;
      this.name = this.customerDetails.name;
      this.age = this.customerDetails.age;
      this.phoneNumber = this.customerDetails.phoneNumber;
    }
     */
    
    // Data got from the Property Decorator "Input".
    if (this.inItData) {
      this.id = this.inItData.id;
      this.name = this.inItData.name;
      this.age = this.inItData.age;
      this.phoneNumber = this.inItData.phoneNumber;
    }
  }

  saveUser(create: boolean) {
    let user: any = {};
    if (create) {
      const id = this.userService.customer.length;
      user = {
        id: id,
        name: this.name,
        phoneNumber: this.phoneNumber,
        age: this.age,
        email: this.email
      }
      this.userService.customer.push(user);
      this.close();
    } else {
      this.userService.customer.forEach((user: any) => {
        if(user.id === this.id) {
          user.name = this.name;
          user.phoneNumber = this.phoneNumber;
          user.age = this.age;
          user.email = this.email;
        }
      });
      this.close();
    }
  }

  close() {
    /**
     * route.navigate navigate back to the home page
    this.router.navigate(['admin/home']);
     */

    this.output.emit();
  }

}
