import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/core/data/products';
import { UserService } from 'src/app/core/services/user.service';
import { ProductsService } from 'src/app/modules/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartNumber: number = 0;
  showDropdown: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    private productsService: ProductsService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.userService.isAuthenticated;
    PRODUCTS.map((product) => {
      this.cartNumber += product.quantity;
    });
  }

  onSearch(e: Event) {
    const searchQuery = (e.target as HTMLInputElement).value;
    this.productsService.keyword.next(searchQuery?.trim().toLowerCase());
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  signOut() {
    this.router.navigate(['/login']);
    this.userService.signOut();
  }
}
