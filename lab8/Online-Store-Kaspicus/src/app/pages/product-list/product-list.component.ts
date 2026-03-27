import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model/product.model';
import { ProductItemComponent } from './product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: `./product-list.component.html`,
  styleUrl: `./product-list.component.css`,
  standalone: true,
})
export class ProductListComponent {
   @Input() products: Product[] = [];

   onDelete (productID: number)
   { this.products = this.products.filter(p => p.id !== productID); }
}