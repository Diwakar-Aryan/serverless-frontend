import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js/pure';
import axios from 'axios';
import { CartService } from '../../services/cart.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  embeddedPayment: boolean = false;
  cartItem: any[] = [];
  isLoggedIn: boolean = false;
  selectedCurrency: string = 'INR';
  exchangeRates: { [key: string]: number } = { INR: 1, USD: 0.0119346, EUR: 0.0109525, AUD: 0.018334, UGX: 44.4825  };
  supportedCurrencies: string[] = ['INR', 'USD', 'EUR', 'AUD', 'UGX'];
  constructor(private cartService: CartService, private auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.embeddedPayment = false;
    this.isLoggedIn = !!localStorage.getItem('tokenId');
    this.cartService.cart$.subscribe((cartItems) => {
      this.cartItem = cartItems;
    });
    axios.interceptors.request.use((config) => {
      const authToken = localStorage.getItem('tokenId');
      console.log(authToken);
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    });
    this.fetchExchangeRates();
  }
  async fetchExchangeRates() {
    try {
      const response = await axios.get('https://api.exchangerate-api.com/v4/latest/INR');
      this.exchangeRates['USD'] = response.data.rates.USD;
      this.exchangeRates['EUR'] = response.data.rates.EUR;
      this.exchangeRates['AUD'] = response.data.rates.AUD;
      this.exchangeRates['UGX'] = response.data.rates.UGX;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
    }
  }

  onCurrencyChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCurrency = selectElement.value;
  }

  convertPrice(amount: number): string {
    return (amount * (this.exchangeRates[this.selectedCurrency] || 1)).toFixed(2);
  }
  async doCheckout() {
    const stripe = await loadStripe(
      'pk_test_51PM6BADJUuO5kkChDdnuYDmXZCvhrCXxXjUd98kM8ntSjlbmB0chibMbNtmc3oTQh10fq2Qs6XKzca36KqJ00HDO00KpDwqrrF'
    );

    const response = await axios.post(
      'http://localhost:3000/payment/create-checkout-session',
      { cart: this.cartItem }
    );

    const checkout = await stripe?.initEmbeddedCheckout({
      clientSecret: response.data.clientSecret,
    });
    if (checkout) {
      this.embeddedPayment = true;
    }
    // Mount Checkout
    checkout?.mount('#checkout');
  }
  getTotalCost(): number {
    return this.cartItem.reduce(
      (total, item) => total + parseFloat(item.cost),
      0
    );
  }
  removeItem(noteId: string) {
    this.cartService.removeFromCart(noteId);
  }

  async loginAt() {
    this.auth.loginWithRedirect();
  }
}
