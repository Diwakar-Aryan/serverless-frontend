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
