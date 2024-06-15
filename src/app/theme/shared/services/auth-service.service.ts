import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }
  async loginAt() {
    this.auth.loginWithRedirect();
  }
  saveToLocalStorage(key: string, value: string | null): void {
    if (value) {
      localStorage.setItem(key, value);
    }
  }

  logout(): void {
  
    localStorage.removeItem('userImage');
    localStorage.removeItem('tokenId');
    this.auth.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
}
