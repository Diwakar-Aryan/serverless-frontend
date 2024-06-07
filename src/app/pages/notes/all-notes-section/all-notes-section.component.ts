import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-notes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-notes-section.component.html',
  styleUrl: './all-notes-section.component.css'
})
export class AllNotesSectionComponent {
  currentContent: string = 'locked';

  showContent(content: string): void {
    this.currentContent = content;
  }
}
