import { Injectable } from '@angular/core';
import { Customer } from "../models/customer";
import { HttpClient } from '@angular/common/http';
import { API } from '../constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public customer = [
    {
      id: '0', name: 'Arun', age: '12', phoneNumber: '1257963'
    }
  ];

  constructor ( private http: HttpClient ) {}

  getUsersList(): Observable<any> {
    // return this.customer;
    return this.http.get(API.allUsers);

  }

  addCustomer(data: Customer) {
    // this.customer.push(data);
  }

  updateCustomer(id: number, data: Customer) {
    // const value = this.customer.findIndex(x => x.id === id);
    // if (value > -1) {
    //   this.customer[id] = data;
    // }
  }

  deleteCustomer(id: number) {
    // const value = this.customer.findIndex(x => x.id === id);
    // if (value > -1) {
    //   this.customer.splice(id, 1);
    // }
  }
}
