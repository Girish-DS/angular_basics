import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";

/**
 * @Component is a class decorator / 
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Globally assigned variables
  public header = [
    { name: 'Name' },
    { name: 'Age' },
    { name: 'Phone Number' },
    { name: 'Action' },
  ];

  public customerDetails: any;
  public userslist: boolean = true;
  public customer: any;
  public edit: boolean = false;

  /**
   * UserService is used for the API call or data transfer
   * Router is used to navigate from one module/component to another
   **/
  constructor( public userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.userslist = true;
    this.edit = false;
    this.getUsersList();
  }

  getUsersList() {
    /**
     * data is getting from the service file
     **/ 

    this.customerDetails = this.userService.getUsersList();
    this.userslist = true;
    this.edit = false;
  }

  createCustomer() {
    /*
    * We can use the rputer.navigate to get the edit view, instead of exporting the addOrEditComponent.
    this.router.navigate(['admin/add'], {queryParams: {data: '', edit: false}});
    */

    // This is used for the exported component.
    this.customer = "";
    this.userslist = false;
    this.edit = false;
  }

  editCustomer(customer: any) {
    /*
    * We can use the rputer.navigate to get the edit view, instead of exporting the addOrEditComponent.
    this.router.navigate(['admin/edit'], {queryParams: {data: JSON.stringify(customer), edit: true}});
    */

    // This is used for the exported component.
    this.customer = customer;
    this.userslist = false;
    this.edit = true;
  }

  deleteCustomer(data: any) {
    const cus = this.userService.customer.findIndex(x => x.id === data.id);
    if (cus > -1) {
      this.userService.customer.splice(cus, 1);
    }
  }

}