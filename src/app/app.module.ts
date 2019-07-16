import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ArtistModule } from './artist/artist.module';

import { CommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ArtistModule,
    CommonsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
