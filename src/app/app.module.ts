import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ArtistModule } from './artist/artist.module';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';
import { AsideComponent } from './commons/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ArtistModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
