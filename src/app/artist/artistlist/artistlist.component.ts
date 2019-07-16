import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/shared/classes/artist';
import { ApiServiceService } from 'src/app/shared/services/api-service.service';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.scss']
})
export class ArtistlistComponent implements OnInit {
 allArtists : Artist;

  constructor(private apiServ : ApiServiceService) { }

  pullArtists(){
    this.allArtists = this.apiServ.pullArtists()
  }

  ngOnInit() {
  }

}
