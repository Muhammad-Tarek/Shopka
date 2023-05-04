import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { PRODUCTS } from 'src/app/core/data/products';
import { IProduct } from '../../interfaces/iProduct.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  searchSubscription!: Subscription;
  data = {
    keyword: '',
    category: '',
    price: {} as any,
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.allProducts = [...PRODUCTS];
    this.filteredProducts = [...PRODUCTS];

    this.handelKeyword();
    this.handelCategory();
    this.handelPrice();
  }

  handelKeyword() {
    this.searchSubscription = this.productsService.keyword
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((keyword) => {
        this.data.keyword = keyword;
        this.handelFilters();
      });
  }

  handelCategory() {
    this.productsService.category.subscribe((category) => {
      this.data.category = category;
      if (this.data.category) this.handelFilters();
    });
  }

  handelPrice() {
    this.productsService.price.subscribe((price) => {
      this.data.price = price;
      if (this.data.price) this.handelFilters();
    });
  }

  handelFilters() {
    this.filteredProducts = this.allProducts.filter((product) => {
      if (this.data.price?.min >= 0 && this.data.price?.max >= 0) {
        return (
          (this.data.category && this.data.category !== 'All'
            ? product.category === this.data.category
            : true) &&
          product.price >= this.data.price.min &&
          product.price <= this.data.price.max &&
          (this.data.keyword
            ? product.title.toLowerCase().includes(this.data.keyword)
            : true)
        );
      }
      return (
        (this.data.category && this.data.category !== 'All'
          ? product.category === this.data.category
          : true) &&
        (this.data.keyword
          ? product.title.toLowerCase().includes(this.data.keyword)
          : true)
      );
    });
  }
}
