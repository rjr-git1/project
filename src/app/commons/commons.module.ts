import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, NotfoundComponent, AsideComponent],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [HomeComponent, NavbarComponent, NotfoundComponent, AsideComponent]
})
export class CommonsModule { }
