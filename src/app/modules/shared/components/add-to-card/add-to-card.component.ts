import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/modules/products/interfaces/iProduct.interface';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.scss'],
})
export class AddToCardComponent implements OnInit, OnChanges {
  @Input() product!: IProduct;
  quantity: number = 1;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.product) {
      this.quantity = !this.product.quantity ? 1 : this.product.quantity;
    }
  }

  setQuantity(type: string) {
    if (type === 'plus') {
      ++this.quantity;
    } else {
      if (this.quantity !== 0) {
        --this.quantity;
      }
    }
  }

  addToCard() {
    this.product.quantity = this.quantity;
  }
}
