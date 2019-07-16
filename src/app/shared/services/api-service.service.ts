import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from '../classes/artist';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiURL = `${environment.API_URL}artists`;

  constructor(private http: HttpClient) { }

  // pulls the whole list
  pullArtists$(){
    return this.http.get(this.apiURL)
  }

  // get artist by id
  getArtist$(id: string) {
    this.apiURL +=id;
    return this.http.get<Artist>(this.apiURL);
  }



