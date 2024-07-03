import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bichhauni-page',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './bichhauni-page.component.html',
  styleUrl: './bichhauni-page.component.css'
})
export class BichhauniPageComponent {

}
