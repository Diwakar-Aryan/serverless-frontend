import { Component, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT, CommonModule ,Location} from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { AuthServiceService } from '../../shared/services/auth-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet,BreadcrumbComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navCollapsed: boolean = true;
  isAuthenticated: boolean = false;
  

  constructor( private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}
  // ngOnInit(): void {
  //   this.auth.auth.isAuthenticated$.subscribe(isAuthenticated => {
  //     this.isAuthenticated = isAuthenticated;
  //     if (isAuthenticated) {
  //       this.auth.auth.user$.subscribe(user => {
  //         if (user) {
  //           // this.userImage = user.picture || null;
  //         }
  //       });
  //     }
  //   });
  // }
  toggleNavbar() {
    this.navCollapsed = !this.navCollapsed;
    const paddingTop = this.navCollapsed ? '5.5%' : 'calc(5.5% + 11.2%)';
    this.renderer.setStyle(this.document.body, 'padding-top', paddingTop);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.document.querySelector('.navbar') as HTMLElement;
    const navigation = this.document.querySelector('.navigation') as HTMLElement;
    if (window.pageYOffset > 0) {
      this.renderer.addClass(navbar, 'scrolled');
      this.renderer.addClass(navigation, 'scrolled');
    } else {
      this.renderer.removeClass(navbar, 'scrolled');
      this.renderer.removeClass(navigation, 'scrolled');
    }
  }
}
