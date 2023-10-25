import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import { CustomDirectiveDirective } from 'src/app/directives/custom-directive.directive';
import { AddOrEditModule } from 'src/app/components/add-or-edit/add-or-edit.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent, CustomDirectiveDirective],
  imports: [
    CommonModule,
    AddOrEditModule,
    FormsModule,
    RouterModule.forChild(routes),
    ToastrModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class HomeModule { }
