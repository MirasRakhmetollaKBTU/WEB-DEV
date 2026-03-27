import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('Online-Store-Kaspicus')
  
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    document.documentElement.style.setProperty('--cursor-x', event.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', event.clientY + 'px');
  }
}
