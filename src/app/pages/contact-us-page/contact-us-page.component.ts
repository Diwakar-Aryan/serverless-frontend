import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {
  activeTab: string = 'message'; // Default active tab
  selectedExcursion: string | null = null;
  selectedLocation: string = 'Any';
  showImages: boolean = false;

  allWorkshops = [
    'Half-day Block Printing',
    'Half-day Natural Dye',
    'One-day Block Carving',
    'One-day Block Print & Natural Dye',
    'One-day Natural Dye',
    'One-day Natural Indigo',
    'Table Cloth Large',
    'One-day Resist Printing',
    'Two-day Block Print & Natural Dye',
    'Two-day Resist Printing',
    'Four-day Workshop',
    'Six-day Workshop',
    'Eight-day Workshop'
  ];
  workshopOptionsWithImagesAnyTab = [
    'Half-day Block Printing',
    'Half-day Natural Dye',
    'One-day Block Print & Natural Dye',
    'One-day Resist Printing',
    'Two-day Block Print & Natural Dye',
    'Two-day Resist Printing',
    'Four-day Workshop',
    'Six-day Workshop',
    'Eight-day Workshop'
  ];
  workshopOptionsWithImagesBagruTab = [
    'Half-day Block Printing',
    'Half-day Natural Dye',
    'One-day Block Print & Natural Dye',
    'One-day Resist Printing',
    'Two-day Block Print & Natural Dye',
    'Two-day Resist Printing',
    'Four-day Workshop',
    'Six-day Workshop',
    'Eight-day Workshop'
  ];
  workshopOptionsWithDelhiTab=[
    'One-day Natural Dye',
    'One-day Natural Indigo',

  ]
  workshopOptionsWithJaipurTab=[
    'One-day Block Carving',
    'Eight-day Workshop'

  ]
  workshopOptionsWithOnlineTab = [
    'Half-day Block Printing',
    'Half-day Natural Dye',
    'One-day Block Print & Natural Dye',
    'One-day Natural Indigo',
    'One-day Resist Printing',
    'Two-day Block Print & Natural Dye',
    'Two-day Resist Printing',
    'Four-day Workshop',
    'Six-day Workshop'
   
  ];

  filteredWorkshops = this.allWorkshops;
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  selectExcursion(excursion: string) {
    this.selectedExcursion = excursion;
  }

  selectLocation(location: string) {
    this.selectedLocation = location;
    this.updateFilteredWorkshops();
    this.updateImageDisplay();
  }

  onWorkshopChange(event: Event) {
    const selectedWorkshop = (event.target as HTMLSelectElement).value;
    this.showImages = this.shouldShowImages(selectedWorkshop);
  }

  shouldShowImages(selectedWorkshop: string): boolean {
    return (this.selectedLocation === 'Any' || this.selectedLocation === 'Bagru' || this.selectedLocation === 'Delhi'
      || this.selectedLocation === 'Jaipur' || this.selectedLocation === 'Online'
    ) &&
           this.workshopOptionsWithImagesAnyTab.includes(selectedWorkshop);
  }
  updateImageDisplay() {
    const workshopSelectElement = document.getElementById('workshop') as HTMLSelectElement;
    const selectedWorkshop = workshopSelectElement ? workshopSelectElement.value : '';
    this.showImages = this.shouldShowImages(selectedWorkshop);
  }

  updateFilteredWorkshops() {
    if (this.selectedLocation === 'Bagru') {
      this.filteredWorkshops = this.workshopOptionsWithImagesBagruTab;
    }else if(this.selectedLocation === 'Delhi'){
      this.filteredWorkshops = this.workshopOptionsWithDelhiTab;
    }else if(this.selectedLocation === 'Jaipur'){
      this.filteredWorkshops = this.workshopOptionsWithJaipurTab;
    }else if(this.selectedLocation === 'Online'){
      this.filteredWorkshops = this.workshopOptionsWithOnlineTab;
    }
     else {
      this.filteredWorkshops = this.allWorkshops;
    }
  }
}
