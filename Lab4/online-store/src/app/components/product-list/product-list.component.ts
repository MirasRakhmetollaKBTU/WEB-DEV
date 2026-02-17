import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../../data/products';

@Component({
    selector: 'app-product-list',
    standalone: true,
    imports: [CommonModule, ProductCardComponent],
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
    products = PRODUCTS;

    setSpotlight(event: MouseEvent): void {
    const glassMain = document.querySelector('.glass-main') as HTMLElement | null;
    if (!glassMain) return;

    const rect = glassMain.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    const cx = Math.max(0, Math.min(100, x));
    const cy = Math.max(0, Math.min(100, y));

    glassMain.style.setProperty('--mx', `${cx}%`);
    glassMain.style.setProperty('--my', `${cy}%`);
    }

    resetSpotlight(): void {
    const glassMain = document.querySelector('.glass-main') as HTMLElement | null;
    if (!glassMain) return;

    glassMain.style.setProperty('--mx', '50%');
    glassMain.style.setProperty('--my', '30%');
    }
}