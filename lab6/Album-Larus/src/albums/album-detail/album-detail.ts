import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../album.model';
import { AlbumsService } from '../../services/albums-service';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: `album-detail.html`,
  standalone: true,
  styleUrls: [`album-detail.css`,]
})
export class AlbumDetail {
  loading = true;
  error: string | null = null;

  album: Album | null = null;
  editedTitle = '';
  saving = false;

  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AlbumsService
  ) {}

  get currentUrl(): string {
    return this.router.url;
  }

  ngOnInit() {
  console.log('AlbumDetail init');

  const idStr = this.route.snapshot.paramMap.get('id');
  console.log('idStr =', idStr);

  const id = Number(idStr);
  console.log('id =', id);

  console.log('calling service.getAlbum...');
  this.service.getAlbum(id).subscribe({
    next: (data) => {

      console.log('ALBUM DATA:', data);
      this.album = data;
      this.editedTitle = data.title;
      this.loading = false;
            console.log('SET loading=false now');
    },
    error: (e) => {
      console.error('HTTP ERROR:', e);
      this.error = 'Failed to load album';
      this.loading = false;
    },
  });
}

  save() {
    if (!this.album) return;

    this.saving = true;
    const updated: Album = { ...this.album, title: this.editedTitle };

    this.service.updateAlbum(updated).subscribe({
      next: (data) => {
        this.album = data;
        this.editedTitle = data.title;
        this.saving = false;
        this.loading = false;   
      },
      error: () => {
        alert('Save failed');
        this.saving = false;
        this.loading = false;   
      },
    });
  }


  back() {
    this.router.navigate(['./albums']);
  }
}
