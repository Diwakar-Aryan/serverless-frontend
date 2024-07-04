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
  isOneDayVisible=false;
  isTwoDayVisible=false;
  isSixDayVisible=false;
  isEightDayVisible = false;


  isOnline=false;
  isBagru=false;

  currentContent = 'BAGRU';

  eightDayContent() {
    this.isEightDayVisible = !this.isEightDayVisible;
  }
  oneDayContent() {
    this.isOneDayVisible = !this.isOneDayVisible;
  }

  twoDayContent() {
    this.isTwoDayVisible = !this.isTwoDayVisible;
  }
  sixDayContent() {
    this.isSixDayVisible = !this.isSixDayVisible;
  }

  
  onlineContent() {
    this.isOnline = !this.isOnline;
  }
  bagruContent() {
    this.isBagru = !this.isBagru;
  }
  switchContent(content: string) {
    this.currentContent = content;
  }
}
