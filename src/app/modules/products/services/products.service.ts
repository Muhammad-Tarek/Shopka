import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  keyword: BehaviorSubject<string> = new BehaviorSubject('');
  category: BehaviorSubject<string> = new BehaviorSubject('');
  price: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}
}
