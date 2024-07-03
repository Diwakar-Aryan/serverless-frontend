import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-images-section',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './images-section.component.html',
  styleUrl: './images-section.component.css'
})
export class ImagesSectionComponent {

}
