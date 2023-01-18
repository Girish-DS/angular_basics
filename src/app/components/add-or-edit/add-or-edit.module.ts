import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddOrEditComponent} from "./add-or-edit.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [AddOrEditComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddOrEditComponent]
})
export class AddOrEditModule { }
