import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  like(): void {
    this.product.likes += 1;
  }

  requestDelete(): void {
    if (confirm(`Delete "${this.product.name}"?`)) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const name = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${name}`, '_blank', 'noopener,noreferrer');
  }
}