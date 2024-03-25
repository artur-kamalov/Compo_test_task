import { Component, OnInit } from '@angular/core';
import { ButtonComponent, LikeButtonComponent, ToggleButtonComponent } from '../../shared/components/ui';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    ButtonComponent,
    LikeButtonComponent,
    ToggleButtonComponent,
    CommonModule
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  purchasesCounter: number = 0;
  readonly productId = 1;

  ngOnInit(): void {
    this.purchasesCounter = Number(localStorage.getItem(`product_count_${this.productId}`))
  }
  addPurchaseToCart() {
    console.log('clicked')
    this.purchasesCounter++;
    localStorage.setItem(`product_count_${this.productId}`, `${this.purchasesCounter}`)
  }
  removePurchaseFromCart() {
    console.log('clicked')
    this.purchasesCounter--;
    localStorage.setItem(`product_count_${this.productId}`, `${this.purchasesCounter}`)
  }

  morph(count: number, array: Array<string>) {
    return (array = array || ['штука', 'штуки', 'штук']) && array[(count % 100 > 4 && count % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(count % 10 < 5) ? count % 10 : 5]];
  }
}
