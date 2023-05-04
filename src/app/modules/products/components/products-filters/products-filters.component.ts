import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRODUCTS } from 'src/app/core/data/products';
import { IPrice } from '../../interfaces/iPrice.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
})
export class ProductsFiltersComponent implements OnInit {
  showCategories: boolean = true;
  showPrices: boolean = true;
  categories: string[] = [];
  prices: IPrice[] = [];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getPrices();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      category: [null],
      price: [null],
    });
  }

  getCategories() {
    this.categories.push('All');
    PRODUCTS.forEach((product) => {
      if (this.categories.indexOf(product.category) < 0) {
        this.categories.push(product.category);
      }
    });
  }

  getPrices() {
    const numbers = [0];
    PRODUCTS.forEach((product) => {
      numbers.push(this.ceilNearest100(product.price));
    });
    const uniquePrices = new Set(numbers);
    const prices = Array.from(uniquePrices);
    prices.forEach((price, i) => {
      if (i < prices.length - 1) {
        this.prices.push({ min: prices[i], max: prices[i + 1] });
      }
    });
  }

  ceilNearest100(num: number) {
    return Math.ceil(num / 100) * 100;
  }

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  togglePrices() {
    this.showPrices = !this.showPrices;
  }

  changeCategory() {
    this.productsService.category.next(this.form.value.category);
  }

  changePrice() {
    this.productsService.price.next(this.form.value.price);
  }
}
