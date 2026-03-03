import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppNavBar } from '../app.nav-bar/app.nav-bar';

@Component({
  selector: 'app-root',
  imports: [AppNavBar, RouterOutlet, RouterLink, RouterLinkActive],
  standalone: true,
  template: `
    <app-nav-bar></app-nav-bar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Album-Larus');
}
