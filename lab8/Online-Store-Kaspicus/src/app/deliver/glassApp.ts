import { Component, Host, input } from '@angular/core';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[glassApp]',
  standalone: true,
})
export class GlassEffectDeliver {
  @Input() glassColor: string = '#000000';

  @HostBinding('style.--glass-color') get color() 
  { return this.glassColor; }

  @HostBinding('style.--mx') mouseX = '50%';
  @HostBinding('style.--my') mouseY = '50%';

  @HostBinding('style.--hover-state') hoverState = 0;

  @HostListener('mousemove', ['$event'])
    onMouseMove (event: MouseEvent) 
    {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();

      const x = ((event.clientX - rect.left) /rect.width) * 100;
      const y = ((event.clientY - rect.top) /rect.height) * 100;

      this.mouseX = `${x}%`;
      this.mouseY = `${y}%`;
      
      this.hoverState = 1;
    }

  @HostListener('mouseleave')
    onMouseLeave ()
    { this.hoverState = 0; }
}