import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [UserlistComponent, UserComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [UserlistComponent, UserComponent, RegisterComponent, LoginComponent]
})
export class UserModule { }
