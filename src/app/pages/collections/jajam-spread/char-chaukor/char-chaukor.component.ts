import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-char-chaukor',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './char-chaukor.component.html',
  styleUrl: './char-chaukor.component.css'
})
export class CharChaukorComponent implements OnInit  {
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
  switchContent(content: string) {
    this.currentContent = content;
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
