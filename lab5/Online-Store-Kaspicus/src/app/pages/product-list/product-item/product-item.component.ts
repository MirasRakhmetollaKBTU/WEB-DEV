import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: `./product-item.component.html`,
  styleUrl: `./product-item.component.css`,
  standalone: true,
})
export class ProductItemComponent {
    @Input({ required: true }) product!: Product;
    @Output() deleteProduct = new EventEmitter<number>();

  selectedImageByIndex: Record<number, number> = {};

  getSelectedImage (product: Product): string 
  { const idx = this.selectedImageByIndex[product.id] ?? 0;
    return product.images[idx] || product.image;
  }

  selectImage (productID: number, index: number): void 
  { this.selectedImageByIndex[productID] = index; }

  stars (rating: number): number[] 
  { return [1, 2, 3, 4, 5];}

  whatsappShare (product: Product): string 
  { const text: string = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShare (product: Product): string
  { const url = encodeURIComponent(product.link);
    const text = encodeURIComponent(product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  like(product: Product) {
    product.likes++;
  }

  remove(id: number) 
  { if (confirm('Delete this product?')) 
    { this.deleteProduct.emit(id);}
  }
}