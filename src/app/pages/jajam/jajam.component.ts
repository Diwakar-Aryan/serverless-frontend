import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeopleTexttileComponent } from './people-texttile/people-texttile.component';
import { RegionalPageComponent } from './regional-page/regional-page.component';
import { JourneyPageComponent } from './journey-page/journey-page.component';

@Component({
  selector: 'app-jajam',
  standalone: true,
  imports: [CommonModule,PeopleTexttileComponent,RegionalPageComponent,JourneyPageComponent],
  templateUrl: './jajam.component.html',
  styleUrl: './jajam.component.css'
})
export class JajamComponent {
  currentTab: string = 'Tab1';

  openTab(tabName: string): void {
    this.currentTab = tabName;
  }
}
