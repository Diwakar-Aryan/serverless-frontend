import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-workshop-content-section',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './workshop-content-section.component.html',
  styleUrl: './workshop-content-section.component.css'
})
export class WorkshopContentSectionComponent {
  currentContent: string = 'all';

  showContent(content: string): void {
    this.currentContent = content;
  }
}
