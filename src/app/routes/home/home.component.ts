import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { SharedService } from "../../shared.service"

/**
 * @Component is a class decorator / 
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
  public customerTrue: boolean = true;
  public usersList: boolean = true;
  public customer: any;
  public edit: boolean = false;

  /**
   * UserService is used for the API call or data transfer
   * Router is used to navigate from one module/component to another
   **/
  constructor(
    private sharedService: SharedService,
    public userService: UserService,
    ) { }

  ngOnInit(): void {
    this.sharedService.shareData('HOME');
    this.usersList = true;
    this.edit = false;
    this.getUsersList();
  }

  getUsersList() {
    /**
     * data is getting from the service file
     **/ 
    this.userService.getUsersList().subscribe( res => {
      
      if (res) {
        this.customerTrue = true;
        this.customerDetails = res;
      }

      this.customerTrue = false;

    }, err => {
      console.log(err);      
    });

    this.usersList = true;
    this.edit = false;
  }

  createCustomer() {
    /*
    * We can use the router.navigate to get the edit view, instead of exporting the addOrEditComponent.
    this.router.navigate(['admin/add'], {queryParams: {data: '', edit: false}});
    */

    // This is used for the exported component.
    this.customer = "";
    this.usersList = false;
    this.edit = false;
  }

  editCustomer(customer: any) {
    /*
    * We can use the rputer.navigate to get the edit view, instead of exporting the addOrEditComponent.
    this.router.navigate(['admin/edit'], {queryParams: {data: JSON.stringify(customer), edit: true}});
    */

    // This is used for the exported component.
    this.customer = customer;
    this.usersList = false;
    this.edit = true;
  }

  deleteCustomer(data: any) {
    const cus = this.userService.customer.findIndex(x => x.id === data.id);
    if (cus > -1) {
      this.userService.customer.splice(cus, 1);
    }
  }

}