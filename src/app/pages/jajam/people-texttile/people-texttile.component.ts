import { Component } from '@angular/core';
import { JajamText1Component } from './jajam-text1/jajam-text1.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-texttile',
  standalone: true,
  imports: [CommonModule, JajamText1Component,RouterModule,RouterOutlet],
  templateUrl: './people-texttile.component.html',
  styleUrl: './people-texttile.component.css'
})
export class PeopleTexttileComponent {

  scrollTo(sectionId: string) {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
