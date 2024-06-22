import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {loadStripe} from '@stripe/stripe-js/pure';
import  axios from 'axios';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  embeddedPayment: boolean = false
  cartItem: any[] =[]

  async ngOnInit(): Promise<void> {
    this.embeddedPayment = false;
    const localStorageItem = await localStorage.getItem("cart");
    if(localStorageItem) {
      this.cartItem = JSON.parse(localStorageItem);
      this.cartItem.forEach(item => item.cost = Number(item.cost));
    }
  }

  async doCheckout(){
    const stripe = await loadStripe('pk_test_51PM6BADJUuO5kkChDdnuYDmXZCvhrCXxXjUd98kM8ntSjlbmB0chibMbNtmc3oTQh10fq2Qs6XKzca36KqJ00HDO00KpDwqrrF');

    const response = await axios.post('http://localhost:3000/payment/create-checkout-session',{cart: this.cartItem});

    const checkout = await stripe?.initEmbeddedCheckout({
      clientSecret: response.data.clientSecret,
    });
    if(checkout) {
      this.embeddedPayment = true
    }
    // Mount Checkout
    checkout?.mount('#checkout');
  }
  getTotalCost(): number {
    return this.cartItem.reduce((total, item) => total + item.cost, 0);
  }
  removeItem(index: number) {
    this.cartItem.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartItem));
  }
}
