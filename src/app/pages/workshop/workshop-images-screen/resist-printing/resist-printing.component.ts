import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resist-printing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resist-printing.component.html',
  styleUrl: './resist-printing.component.css'
})
export class ResistPrintingComponent {
  isContentVisible = false;
  isEightDayVisible = false;
  isJaipur=false;

  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
  }
  eightDayContent() {
    this.isEightDayVisible = !this.isEightDayVisible;
  }
  jaipurContent() {
    this.isJaipur = !this.isJaipur;
  }
}
