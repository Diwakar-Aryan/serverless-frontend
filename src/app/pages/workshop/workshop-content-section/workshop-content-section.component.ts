import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop-content-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshop-content-section.component.html',
  styleUrl: './workshop-content-section.component.css'
})
export class WorkshopContentSectionComponent {
  currentCategory: string = 'all';

  showPrograms(category: string) {
    this.currentCategory = category;
  }
}
