import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotesTextSectionComponent } from './notes-text-section/notes-text-section.component';
import { AllNotesSectionComponent } from './all-notes-section/all-notes-section.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NotesTextSectionComponent,AllNotesSectionComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

}
