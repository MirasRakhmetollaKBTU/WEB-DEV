import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../albums/album.model';
import { Observable } from 'rxjs';
import { Photo } from '../albums/album-photos/photo.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private readonly baseURL = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums() : Observable<Album[]>
  { return this.http.get<Album[]>(this.baseURL); }

  getAlbum(id: number) : Observable<Album>
  {return this.http.get<Album>(this.baseURL + `/${id}`); }

  getPhotos(id: number): Observable<Photo[]> 
  { return this.http.get<Photo[]>(`${this.baseURL}/${id}/photos`); }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(
      `${this.baseURL}/${album.id}`,
      album
    );
  }

  deleteAlbum(id: number): Observable<void> 
  { return this.http.delete<void>(`${this.baseURL}/${id}`); }
}
