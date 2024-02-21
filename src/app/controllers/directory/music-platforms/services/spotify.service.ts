import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpotifyArtist } from '../model/SpotifyArtist';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private readonly artistURL = 'https://api.spotify.com/v1/artists/';

  constructor(public http: HttpClient) {}

  getArtist(id: string): Observable<SpotifyArtist> {
    return this.http.get<SpotifyArtist>(this.artistURL + id);
  }
}
