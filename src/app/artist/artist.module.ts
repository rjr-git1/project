import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistlistComponent } from './artistlist/artistlist.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';
import { ApiServiceService } from '../shared/services/api-service.service';

@NgModule({
  declarations: [ArtistlistComponent, ArtistComponent, ArtistFormComponent],
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  providers: [ApiServiceService],

  exports: [ArtistlistComponent, ArtistComponent, ArtistFormComponent]
})
export class ArtistModule { }
