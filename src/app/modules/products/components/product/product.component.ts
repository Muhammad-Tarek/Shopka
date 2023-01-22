import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/iProduct.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct = {} as IProduct;

  constructor() {}

  ngOnInit(): void {}
}
