import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsNavBarComponent } from '../tabs-nav-bar/tabs-nav-bar.component';

@Component({
  selector: 'app-journey-page',
  standalone: true,
  imports: [CommonModule,TabsNavBarComponent],
  templateUrl: './journey-page.component.html',
  styleUrl: './journey-page.component.css'
})
export class JourneyPageComponent {

}
