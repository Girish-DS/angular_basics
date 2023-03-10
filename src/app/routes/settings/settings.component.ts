import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private shareService: SharedService,
  ) { }

  ngOnInit(): void {
    this.shareService.shareData('SERVICE');
  }

}
