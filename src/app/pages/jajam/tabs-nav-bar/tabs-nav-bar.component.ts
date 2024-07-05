import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JourneyPageComponent } from '../journey-page/journey-page.component';
import { PeopleTexttileComponent } from '../people-texttile/people-texttile.component';
import { RegionalPageComponent } from '../regional-page/regional-page.component';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-tabs-nav-bar',
  standalone: true,
  imports: [CommonModule,  RouterModule,RouterOutlet],
  templateUrl: './tabs-nav-bar.component.html',
  styleUrl: './tabs-nav-bar.component.css'
})
export class TabsNavBarComponent {
  currentContent= '';
  isRegionShow: boolean = true;
  constructor(private router: Router) {}
  // openTab(tabName: string): void {
  //   this.currentTab = tabName;
  //   this.isRegionShow = false;
  // }
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
    if (currentRoute.includes('jajam')) {
      this.currentContent = 'jajam';
    } else if (currentRoute.includes('jajam/journey')) {
      this.currentContent = 'journey';
    } else {
      this.currentContent = 'regional';
    }
  }
}
