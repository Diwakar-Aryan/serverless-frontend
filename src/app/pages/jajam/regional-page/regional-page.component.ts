import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsNavBarComponent } from '../tabs-nav-bar/tabs-nav-bar.component';

@Component({
  selector: 'app-regional-page',
  standalone: true,
  imports: [CommonModule,RouterModule,TabsNavBarComponent],
  templateUrl: './regional-page.component.html',
  styleUrl: './regional-page.component.css'
})
export class RegionalPageComponent {

}
