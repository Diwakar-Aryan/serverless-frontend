import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorkshopText2SectionComponent } from '../../workshop-text2-section/workshop-text2-section.component';

@Component({
  selector: 'app-block-carving',
  standalone: true,
  imports: [CommonModule,WorkshopText2SectionComponent],
  templateUrl: './block-carving.component.html',
  styleUrl: './block-carving.component.css'
})
export class BlockCarvingComponent {
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
