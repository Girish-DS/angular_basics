import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home.component";
import { CustomDirectiveDirective } from 'src/app/directives/custom-directive.directive';
import { AddOrEditModule } from 'src/app/components/add-or-edit/add-or-edit.module';

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
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class HomeModule { }
