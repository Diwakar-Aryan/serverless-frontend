import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chaupad-game',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './chaupad-game.component.html',
  styleUrl: './chaupad-game.component.css'
})
export class ChaupadGameComponent {

}
