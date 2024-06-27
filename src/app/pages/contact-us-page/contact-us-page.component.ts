import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,FormsModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {
  @ViewChild('contactForm') contactForm!: ElementRef;
  name: string = '';
  email: string = '';
  country: string = '';
  message: string = '';
  preferreddate:string='';


  activeTab: string = 'message'; // Default active tab
  selectedExcursion: string | null = null;
  selectedLocation: string = 'Any';
  selectedWorkshop: string = '';
  showImages: boolean = false;
  loading:boolean=false;

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
    this.selectedWorkshop=selectedWorkshop;
  }

  shouldShowImages(selectedWorkshop: string): boolean {
    return (this.selectedLocation === 'Any' || this.selectedLocation === 'Bagru' || this.selectedLocation === 'Delhi'
      || this.selectedLocation === 'Jaipur' || this.selectedLocation === 'Online' ) &&
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
  onSubmit() {
    this.loading=true;
    const scriptURL = 'https://script.google.com/macros/s/AKfycby4gcZMmYl0nkpfK7UDYD0x7CO3xhsvKDt2JTRyumFlW5FBtF_rFBn5g8WiFb7rLzi5NA/exec';
    const form = this.contactForm.nativeElement;

    const formData = new FormData(form);
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('country', this.country);
    formData.append('message', this.message);
    formData.append('preferreddate', this.preferreddate);
    formData.append('topic', this.activeTab);
    formData.append('location', this.selectedLocation);
    formData.append('workshop', this.selectedWorkshop);
    formData.append('image', this.selectedExcursion ? this.selectedExcursion : '');

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response =>{
        console.log('Success!', response);
        this.loading=false;
        this.resetForm();
      } )
      .catch(error =>{
        console.error('Error!', error.message);
        this.loading=false;
      });
  }
  resetForm() {
    this.name = '';
    this.email = '';
    this.country = '';
    this.message = '';
    this.preferreddate = '';
    this.activeTab='message';
    this.selectedExcursion = null;
    this.selectedLocation = 'Any';
    this.selectedWorkshop='';
    this.filteredWorkshops = this.allWorkshops;
    this.contactForm.nativeElement.reset();
  }
}
