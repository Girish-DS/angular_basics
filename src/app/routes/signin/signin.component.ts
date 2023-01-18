import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public name: any;
  public email: any;
  public password: any;
  public pwdReenter: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    if (this.name && this.email) {
      if (this.password && this.pwdReenter) {
        if (this.password === this.pwdReenter) {
          const data: any = {
            name: this.name,
            email: this.email,
            password: this.password
          };
          localStorage.setItem(this.email, JSON.stringify(data));
          // localStorage.clear()
          this.router.navigate(['auth/login']);
        } else {
          alert('Please enter the same password')
        }
      } else {
        alert('Please enter the password.');
      }
    } else {
      alert('Please fill the mandatory fields.');
    }
  }

  back() {
    this.router.navigate(['auth/login']);
  }
}
