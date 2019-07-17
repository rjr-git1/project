import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ArtistModule } from './artist/artist.module';
import { CommonsModule } from './commons/commons.module';

import { HttpClientModule } from '@angular/common/http';

import { FormBuilder } from '@angular/forms';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ArtistModule,
    CommonsModule,
    UserModule,


  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
