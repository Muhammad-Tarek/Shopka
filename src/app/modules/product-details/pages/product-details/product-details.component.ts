import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PRODUCTS } from 'src/app/core/data/products';
import { IProduct } from 'src/app/modules/products/interfaces/iProduct.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: IProduct | any;
  images: any[] = [];
  selectImage: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProductDetails();
  }

  getProductDetails() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.product = PRODUCTS.find((product) => product.id === id);
      this.product.images.map((img: string) => {
        this.images.push({
          src: img,
          isSelected: false,
        });
      });
      this.images[0].isSelected = true;
      this.selectImage = this.images[0];
    });
  }

  onSelectImage(i: number) {
    this.images.map((img) => {
      img.isSelected = false;
    });
    this.images[i].isSelected = true;
    this.selectImage = this.images[i];
  }
}
