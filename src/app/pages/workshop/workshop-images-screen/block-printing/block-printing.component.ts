import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-block-printing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-printing.component.html',
  styleUrl: './block-printing.component.css'
})
export class BlockPrintingComponent {
  isHalfDayVisible = false;
  isEightDayVisible = false;
  isOneDayVisible=false;
  isTwoDayVisible=false;
  isFourDayVisible=false;
  isSixDayVisible=false;

  isJaipur=false;
  isOnline=false;
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
  jaipurContent() {
    this.isJaipur = !this.isJaipur;
  }
  onlineContent() {
    this.isOnline = !this.isOnline;
  }

  switchContent(content: string) {
    this.currentContent = content;
  }
}
