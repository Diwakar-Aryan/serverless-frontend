import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navCollapsed: boolean = true;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  toggleNavbar() {
    this.navCollapsed = !this.navCollapsed;
    const paddingTop = this.navCollapsed ? '6%' : 'calc(6% + 12%)';
    this.renderer.setStyle(this.document.body, 'padding-top', paddingTop);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.document.querySelector('.navbar') as HTMLElement;
    const navbarContent = this.document.querySelector('.navbar-content') as HTMLElement;
    if (window.pageYOffset > 0) {
      this.renderer.addClass(navbar, 'scrolled');
      this.renderer.addClass(navbarContent, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
      this.renderer.removeClass(navbarContent, 'scrolled');
    }
  }
}
