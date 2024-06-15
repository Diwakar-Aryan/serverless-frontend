import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabsNavBarComponent } from '../../tabs-nav-bar/tabs-nav-bar.component';

@Component({
  selector: 'app-ajmer-box',
  standalone: true,
  imports: [CommonModule,TabsNavBarComponent],
  templateUrl: './ajmer-box.component.html',
  styleUrl: './ajmer-box.component.css'
})
export class AjmerBoxComponent {

}
