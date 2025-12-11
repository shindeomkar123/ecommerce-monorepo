import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList = new Map<string, { product: IProduct; qty: number }>();
  cartItem = new BehaviorSubject(new Map());
  cartItem$ = this.cartItem.asObservable();

  getCartItem(): Observable<Map<IProduct, number>> {
    return this.cartItem$;
  }

  addToCart(item: IProduct) {
    if (this.cartList.has(item.id)) {
      const count = this.cartList.get(item.id)!.qty;
      this.cartList.set(item.id, { product: item, qty: count + 1 });
    } else {
      this.cartList.set(item.id, { product: item, qty: 1 });
    }
    console.log(this.cartList);
    this.cartItem.next(this.cartList);
  }

  removeFromCart(item: IProduct) {
    if (this.cartList.has(item.id)) {
      const count = this.cartList.get(item.id)!.qty;
      if (count > 1) {
        this.cartList.set(item.id, { product: item, qty: count - 1 });
      } else {
        this.cartList.delete(item.id);
      }
    }
    this.cartItem.next(this.cartList);
  }

  removeItem(item: IProduct) {
    this.cartList.delete(item.id);
  }
}
