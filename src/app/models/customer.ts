export class Customer {

  public id: number;
  public name: string;
  public phoneNumber: string;
  public email: string;


  constructor(id: number = null as any, name: string = '',
              phoneNumber: string = '', email: string = '') {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
