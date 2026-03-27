import { Component } from '@angular/core';
import { ProductServices } from './services/product';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model/product.model';
import { Category } from './models/product.model/category.models';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="page glass">
    <div class="glass-content">

      <h1>Kaspi Marketplace</h1>

      <!-- CATEGORY BUTTONS -->
      <div class="categories">
        @for (c of categories; track c.id) {
          <button
            class="glass btn"
            style="color: #7a25cf"
            (click)="selectCategory(c.id)"
            [class.active]="c.id === selectedCategoryId">
            {{ c.name }}
          </button>
        }
      </div>

      <!-- NO CATEGORY SELECTED -->
      @if (selectedCategoryId === null) {
        <p class="welcome" style="color: #9b78bd">Select a category to view products</p>
      }

      <!-- PRODUCTS -->
      @if (selectedCategoryId !== null) {
        <app-product-list
          [products]="products">
        </app-product-list>
      }

    </div>
  </div>
  `,
  styles: `
    .categories {
      display: flex;
      gap: 12px;
      margin-bottom: 20px;
      color: #d6a8ff;
    }

    button.active {
      border-color: rgba(0,180,255,0.6);
      box-shadow: 0 0 12px rgba(0,180,255,0.4);
      color: #d6a8ff;
    }

    .welcome {
      margin-top: 40px;
      opacity: 0.6;
    }`,
})
export class AppComponent {
products: Product[] = [];
  categories: Category[] = [];

  selectedCategoryId: number | null = null; 

  constructor(private ps: ProductServices) {
    this.categories = this.ps.getCategories();
  }

  selectCategory(categoryId: number) {          
    this.selectedCategoryId = categoryId;
    this.products = this.ps.getProductsByCategory(categoryId); 
  }
}
