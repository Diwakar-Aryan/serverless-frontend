import { Component, HostListener, Inject, Renderer2, inject } from '@angular/core';
import { DOCUMENT, CommonModule, Location } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { AuthServiceService } from '../../shared/services/auth-service.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, BreadcrumbComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navCollapsed: boolean = true;
  isAuthenticated: boolean = false;
  cartCount = 0;
  cartService = inject(CartService);


  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthServiceService
  ) {}
  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart.length;
    });
    this.isAuthenticated = localStorage.getItem('tokenId') !== null;
  }
  toggleNavbar() {
    this.navCollapsed = !this.navCollapsed;
    const paddingTop = this.navCollapsed ? '4%' : 'calc(5.5% + 9.5%)';
    this.renderer.setStyle(this.document.body, 'padding-top', paddingTop);
  }
  logout(): void {
    this.authService.logout();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.document.querySelector('.navbar') as HTMLElement;
    const navigation = this.document.querySelector(
      '.navigation'
    ) as HTMLElement;
    if (window.pageYOffset > 0) {
      this.renderer.addClass(navbar, 'scrolled');
      this.renderer.addClass(navigation, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
      this.renderer.removeClass(navigation, 'scrolled');
    }
  }
}
