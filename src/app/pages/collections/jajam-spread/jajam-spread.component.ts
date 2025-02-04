import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-jajam-spread',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './jajam-spread.component.html',
  styleUrl: './jajam-spread.component.css'
})
export class JajamSpreadComponent implements OnInit {
  currentContent = '';
  isHalfDayVisible = false;
  isDelhi=false;
  isOnline=false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveTab();
      }
    });
    
  }

  switchContent(content: string) {
    this.currentContent = content;
    
  }
  updateActiveTab() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('jajam-barfi')) {
      this.currentContent = 'BARFI';
    } else if (currentRoute.includes('jajam-char-chaukor')) {
      this.currentContent = 'CHAR';
    } else {
      this.currentContent = 'CHAUPAD';
    }
  }
  toggleContent() {
    this.isHalfDayVisible = !this.isHalfDayVisible;
  }

  delhiContent() {
    this.isDelhi = !this.isDelhi;
  }
  onlineContent() {
    this.isOnline = !this.isOnline;
  }
}
