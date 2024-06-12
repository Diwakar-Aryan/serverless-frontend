import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-regional-page',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './regional-page.component.html',
  styleUrl: './regional-page.component.css'
})
export class RegionalPageComponent {

}
