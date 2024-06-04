import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { WorkshopComponent } from '../../workshop/workshop.component';

@Component({
  selector: 'app-workshop-text',
  standalone: true,
  imports: [RouterModule,RouterOutlet,WorkshopComponent],
  templateUrl: './workshop-text.component.html',
  styleUrl: './workshop-text.component.css'
})
export class WorkshopTextComponent {

  constructor(private router: Router) { }
}
