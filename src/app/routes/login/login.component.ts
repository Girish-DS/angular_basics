import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: any;
  public password: any;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.email && this.password) {
      let data: any = localStorage.getItem(this.email);
      let admin = JSON.parse(data);
      if ((this.email === admin.email) && (this.password === admin.password)) {
        this.router.navigate(['admin/home']);
      } else {
        alert('Invalid Email or Password');
      }
    } else {
      alert('Invalid Email or Password');
    }
  }

  signUp() {
    this.router.navigate(['auth/signin']);
  }

}
