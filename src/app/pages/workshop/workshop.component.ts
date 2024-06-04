import { Component } from '@angular/core';
import { WorkshopTextComponent } from '../home/workshop-button/workshop-text.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WorkshopText1SectionComponent } from './workshop-text1-section/workshop-text1-section.component';
import { WorkshopText2SectionComponent } from './workshop-text2-section/workshop-text2-section.component';
import { WorkshopImageSectionComponent } from './workshop-image-section/workshop-image-section.component';
import { WorkshopContentSectionComponent } from './workshop-content-section/workshop-content-section.component';

@Component({
  selector: 'app-workshop',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, WorkshopText1SectionComponent, WorkshopText2SectionComponent,
    WorkshopImageSectionComponent,WorkshopContentSectionComponent],
  templateUrl: './workshop.component.html',
  styleUrl: './workshop.component.css'
})
export class WorkshopComponent {

}
