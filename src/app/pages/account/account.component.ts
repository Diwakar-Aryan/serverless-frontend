import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { AuthServiceService } from '../../theme/shared/services/auth-service.service';
import { NotesService } from '../../services/notes.service';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
showContent(arg0: string) {
throw new Error('Method not implemented.');
}
  email: string | null = null;
  userName: string | null | undefined;
  userImage: string | null | undefined;
  tokenId: string | null = null;
  lockedNotes: any[] = [];
  selectedTab: string = 'all';

  constructor(
    public auth: AuthServiceService,
    private http: HttpClient,
    private router: Router,
    private notesService:NotesService,
    @Inject(DOCUMENT) public document: Document
  ) {}

  ngOnInit(): void {
    this.checkLoginStatus();
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
    this.getNotes();
  }

  checkLoginStatus(): void {
    const storedTokenId = localStorage.getItem('tokenId');
    if (!storedTokenId) {
      this.loginAt();
    }
  }


  async loginAt() {
    this.auth.auth.loginWithRedirect();
  }


  logout(): void {

    localStorage.removeItem('userImage');
    localStorage.removeItem('tokenId');
    this.auth.auth.logout({ logoutParams: { returnTo: 'https://pn-3-angular-wabisabi-ui-zvjf.vercel.app/home' } });
    // this.router.navigate(['/home']);
  }

  async getNotes() {

    // Call notes services and call all locked notes this will give detail about all nots and call generate pdf and read same as Notes Page
    this.lockedNotes = await this.notesService.getLockedNotes();
  }

  showTabContent(tab: string): void {
    this.selectedTab = tab;
  }
}
