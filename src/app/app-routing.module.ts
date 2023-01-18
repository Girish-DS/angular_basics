import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: "full" },

  {
    path: 'admin',
    loadChildren: () => import('./layout/admin/admin.module').then( x => x.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./layout/auth/auth.module').then( x => x.AuthModule)
  },
  // { path: '**', redirectTo: 'auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
