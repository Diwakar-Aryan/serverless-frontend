import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-natural-dye',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './natural-dye.component.html',
  styleUrl: './natural-dye.component.css'
})
export class NaturalDyeComponent {
  isHalfDayVisible = false;
  isEightDayVisible = false;
  isOneDayVisible=false;
  isTwoDayVisible=false;
  isFourDayVisible=false;
  isSixDayVisible=false;
  
  isDelhi=false;
  isOnline=false;
  isBagru=false;

  currentContent = 'BAGRU';
  toggleContent() {
    this.isHalfDayVisible = !this.isHalfDayVisible;
  }
  eightDayContent() {
    this.isEightDayVisible = !this.isEightDayVisible;
  }
  oneDayContent() {
    this.isOneDayVisible = !this.isOneDayVisible;
  }

  twoDayContent() {
    this.isTwoDayVisible = !this.isTwoDayVisible;
  }
  fourDayContent() {
    this.isFourDayVisible = !this.isFourDayVisible;
  }
  sixDayContent() {
    this.isSixDayVisible = !this.isSixDayVisible;
  }
 
  delhiContent() {
    this.isDelhi = !this.isDelhi;
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
