import { Component } from '@angular/core';
import { Photo } from './photo.model';
import { AlbumsService } from '../../services/albums-service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: `album-photos.html`,
  styleUrls: [`album-photos.css`,]
})
export class AlbumPhotos {
  loading: boolean = true;
  error: string | null = null;
  photos: Photo[] = [];
  albumID: number = 0;

  constructor(
    private albumService: AlbumsService,
    private router: Router,
    private rout: ActivatedRoute,
  ) {}

  get currentUrl(): string {
    return this.router.url; 
  }

ngOnInit() {
  this.rout.paramMap.subscribe(pm => {
    const idStr = pm.get('id');
    this.albumID = Number(idStr);

    this.loading = true;
    this.error = null;

    this.albumService.getPhotos(this.albumID).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (e) => {
        console.error(e);
        this.error = 'Failed to load photos';
        this.loading = false;
      }
    });
  });
}

  selectedUrl: string | null = null;

  open(url: string) { this.selectedUrl = url; }
  close() { this.selectedUrl = null; }

  back() {
    this.router.navigate(['/albums', this.albumID]);
  }
}
