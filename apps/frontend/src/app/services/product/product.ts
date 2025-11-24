import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class Product {
  http = inject(HttpClient);

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3333/api/v1/products');
  }

  getProductDetail(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(
      `http://localhost:3333/api/v1/products/${id}`
    );
  }
}
