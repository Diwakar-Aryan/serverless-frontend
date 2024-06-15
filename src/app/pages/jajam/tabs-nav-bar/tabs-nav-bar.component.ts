import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { JourneyPageComponent } from '../journey-page/journey-page.component';
import { PeopleTexttileComponent } from '../people-texttile/people-texttile.component';
import { RegionalPageComponent } from '../regional-page/regional-page.component';


@Component({
  selector: 'app-tabs-nav-bar',
  standalone: true,
  imports: [CommonModule,  PeopleTexttileComponent,
    RegionalPageComponent, JourneyPageComponent],
  templateUrl: './tabs-nav-bar.component.html',
  styleUrl: './tabs-nav-bar.component.css'
})
export class TabsNavBarComponent {
  currentTab: string = 'Tab3';
  isRegionShow: boolean = true;

  openTab(tabName: string): void {
    this.currentTab = tabName;
    this.isRegionShow = false;
  }
}
