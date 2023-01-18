import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import {AddOrEditComponent} from "../../components/add-or-edit/add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../../routes/home/home.module').then(x => x.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../../routes/dashboard/dashboard.module').then(x => x.DashboardModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../../routes/settings/settings.module').then(x => x.SettingsModule),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddOrEditComponent
      },
      {
        path: 'edit',
        component: AddOrEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
