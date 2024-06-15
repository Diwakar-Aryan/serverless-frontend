import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  email: string | null = null;
  initials: string | null = null;
  userImage: string | null | undefined;
  tokenId: string | null = null;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    @Inject(DOCUMENT) public document: Document
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => {
      if (user && user.email) {
        this.email = user.email;
        this.initials = this.email.substring(0, 2).toUpperCase();
        this.userImage = user.picture || null;
        this.saveToLocalStorage('userImage', this.userImage);
      }
    });
    this.auth.idTokenClaims$.subscribe((claims) => {
      if (claims) {
        this.tokenId = claims.__raw;
        this.saveToLocalStorage('tokenId', this.tokenId);
      }
    });
  }
  
 

  async loginAt() {
    this.auth.loginWithRedirect();
  }
  private saveToLocalStorage(key: string, value: string | null): void {
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
