import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-all-notes-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-notes-section.component.html',
  styleUrl: './all-notes-section.component.css',
})
export class AllNotesSectionComponent implements OnInit {
  currentFilter: string[] = [];
  currentContent = 'dfa';
  allNotes: any[] = [];
  lockedNotes: any[] = [];
  lockStatus: number = 0;

  filteredNotes: any[] = []

  notesService = inject(NotesService)

  async ngOnInit(): Promise<void> {
    this.allNotes = await this.notesService.getAllNotes();
    this.lockedNotes = await this.notesService.getLockedNotes();
    this.applyLockFilter(0)
    const localStorageData = localStorage.getItem('cart');
    if (localStorageData) {
      const cartItems = JSON.parse(localStorageData);
      this.allNotes.forEach(note => {
        note.addedToCart = cartItems.some((item: { id: any; }) => item.id === note._id);
      });
    }
  }
  showContent(content: string): void {
    console.log('Something');
  }

  //Lock Filter 0-> All 1-> Locked 2-> Unlocked
  applyLockFilter(lockType: number) {

    if(lockType === 0) {
      if(this.filteredNotes.length === 0) {

        this.filteredNotes= this.allNotes;

      }


    }
    else if(lockType === 1) {

      this.filteredNotes = this.lockedNotes

    } else {

      this.filteredNotes = this.allNotes.filter(notes => !this.lockedNotes.includes(notes))

    }

  }


  updateCart(note: any, add: boolean) {
    let existingCart: any[];
    const item =  {
      id: note._id,
      priceId: note.stripeDefaultPriceId,
      stripeProductId: note.stripeProductId,
      name: note.name,
      cost: note.cost,
    };
    if (add) {
      note.addedToCart = true;
      const localStorageData: any = localStorage.getItem('cart');
      if(localStorageData && localStorageData !== '[]') {

        existingCart = JSON.parse(localStorageData) ;
        existingCart.push(item)

        localStorage.setItem('cart', JSON.stringify(existingCart));

      } else {

        localStorage.setItem('cart', JSON.stringify([item]));
      }
    } else {
      note.addedToCart = false;
      const localStorageData: any = localStorage.getItem('cart');
      if(localStorageData && localStorageData !== '[]') {

        existingCart = JSON.parse(localStorageData) ;
        const cart = existingCart.filter((obj) => { return obj.id !== note._id })

        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }
}
