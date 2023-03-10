import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title: string = '';

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.content.subscribe((res: any) => {
      this.title = res;
    })
  }

  logout() {
    this.router.navigate(['']);
  }
}
