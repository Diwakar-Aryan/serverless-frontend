import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TextSectionComponent } from './text-section/text-section.component';
import { ImagesSectionComponent } from './images-section/images-section.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule,TextSectionComponent,ImagesSectionComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {

}
