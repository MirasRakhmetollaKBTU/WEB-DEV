import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { About } from '../about/about';
import { AlbumDetail } from '../albums/album-detail/album-detail';
import { Albums } from '../albums/albums';
import { AlbumPhotos } from '../albums/album-photos/album-photos';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: 'full'},
    {path: "home", component: Home},
    {path: "about", component: About},
    {path: "albums", component: Albums},
    {path: "albums/:id", component: AlbumDetail},
    {path: "albums/:id/photos", component: AlbumPhotos},
];
