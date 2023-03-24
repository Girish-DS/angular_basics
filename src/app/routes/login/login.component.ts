import { Component, inject, Inject, Injector, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService as ToasterService, ToastrService } from 'ngx-toastr';
import { BaseComponent } from 'src/app/base_component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public emails = ['User 1', 'User 2'];
  public email: string = '';
  public password: string = '';

  constructor( private router: Router,
    public toaster: ToasterService,
    private inject: Injector
    ) {
      super(inject);
    }

  ngOnInit(): void {
  }

  getClass() {
    if (this.email && this.password) {
      return 'submit';
    }
    return 'not_submit';
  }

  submit() {
    this.toaster.error('Error','Invalid Email or Password');

    if (this.email && this.password) {
      let data: any = localStorage.getItem(this.email);
      let admin = JSON.parse(data);
      if ((this.email === admin.email) && (this.password === admin.password)) {
        this.router.navigate(['admin/home']);
      } else {
        this.toaster.error('Error','Invalid Email or Password');
      }
    } else {
      this.toaster.success('Error','Invalid Email or Password');
    }

  }

  signUp() {
    this.router.navigate(['auth/signin']);
  }

}
