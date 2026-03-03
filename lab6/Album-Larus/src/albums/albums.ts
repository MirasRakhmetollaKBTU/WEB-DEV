import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums-service';
import { Album } from './album.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink],
  templateUrl: "albums.html",
  styleUrls: ["albums.css",],
})
export class Albums implements OnInit {
  loading: boolean = true;
  error: string | null = null;
  albums: Album[] = [];

  constructor(private albumService: AlbumsService) {}
  ngOnInit()
  { this.albumService.getAlbums().subscribe(
    {
      next: (data) => 
      { this.albums = data;
        this.loading = false;
      },

      error: () => 
      { this.error = `Failed to laod albums`;
        this.loading = false;
      }
    })
  }
    
  deleteAlbum(id: number) {
  this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: () => alert('Delete failed'),
    });
  }

  trackById(_: number, a: Album) 
  { return a.id; }
}
