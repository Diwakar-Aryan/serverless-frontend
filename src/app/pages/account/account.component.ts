import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthServiceService } from '../../theme/shared/services/auth-service.service';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  email: string | null = null;
  userName: string | null | undefined;
  userImage: string | null | undefined;
  tokenId: string | null = null;

  constructor(
    public auth: AuthServiceService,
    private http: HttpClient,
    private router: Router,
    @Inject(DOCUMENT) public document: Document
  ) {}

  ngOnInit(): void {
    this.auth.auth. user$.subscribe((user) => {
      if (user && user.email) {
        this.email = user.email;
        this.userName = user.name|| null;
        this.userImage = user.picture || null;
        this.auth.saveToLocalStorage('userImage', this.userImage);
      }
    });
    this.auth.auth.idTokenClaims$.subscribe((claims) => {
      if (claims) {
        this.tokenId = claims.__raw;
        this.auth.saveToLocalStorage('tokenId', this.tokenId);
      }
    });
  }
  
 

  async loginAt() {
    this.auth.auth.loginWithRedirect();
  }
  

  logout(): void {
  
    localStorage.removeItem('userImage');
    localStorage.removeItem('tokenId');
    this.auth.auth.logout({ logoutParams: { returnTo: 'http://localhost:4200/home' } });
    // this.router.navigate(['/home']);
  }
}
