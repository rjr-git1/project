import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';

@NgModule({
  declarations: [ArtistlistComponent, ArtistComponent, ArtistFormComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  exports: [ArtistlistComponent, ArtistComponent, ArtistFormComponent]
})
export class ArtistModule { }
