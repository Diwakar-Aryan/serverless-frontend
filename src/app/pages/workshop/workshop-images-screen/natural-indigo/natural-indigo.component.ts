import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-natural-indigo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './natural-indigo.component.html',
  styleUrl: './natural-indigo.component.css'
})
export class NaturalIndigoComponent {
  currentContent = 'DELHI';
  isHalfDayVisible = false;
  isDelhi=false;
  isOnline=false;


  switchContent(content: string) {
    this.currentContent = content;
  }
  toggleContent() {
    this.isHalfDayVisible = !this.isHalfDayVisible;
  }

  delhiContent() {
    this.isDelhi = !this.isDelhi;
  }
  onlineContent() {
    this.isOnline = !this.isOnline;
  }
}
