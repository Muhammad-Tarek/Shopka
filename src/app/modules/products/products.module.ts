import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductsFiltersComponent],
  imports: [CommonModule, ProductsRoutingModule, SharedModule],
})
export class ProductsModule {}
