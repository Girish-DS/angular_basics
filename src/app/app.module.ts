import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserService } from "./service/user.service";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddOrEditModule } from "./components/add-or-edit/add-or-edit.module";
import { WarningComponent } from './components/warning/warning.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    SidebarComponent,
    NavbarComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AddOrEditModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true
  })
  ],
  providers: [UserService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
