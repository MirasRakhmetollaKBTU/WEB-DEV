import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  mainImage = '';

  ngOnInit(): void {
    this.mainImage = this.product.image;
  }

  setImage(img: string): void {
    this.mainImage = img;
  }

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  shareWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check out this product: ${this.product.link}`
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  
}