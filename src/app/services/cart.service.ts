import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<any[]>(this.getCartFromLocalStorage());
  cart$ = this.cartSubject.asObservable();

  private getCartFromLocalStorage(): any[] {
    const localStorageData = localStorage.getItem('cart');
    return localStorageData ? JSON.parse(localStorageData) : [];
  }

  private updateLocalStorage(cart: any[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  addToCart(note: any): void {
    const cart = this.getCartFromLocalStorage();
    cart.push(note);
    this.updateLocalStorage(cart);
  }

  removeFromCart(noteId: string): void {
    let cart = this.getCartFromLocalStorage();
    cart = cart.filter(item => item.id !== noteId);
    this.updateLocalStorage(cart);
  }

  getCartCount(): number {
    return this.getCartFromLocalStorage().length;
  }
}
