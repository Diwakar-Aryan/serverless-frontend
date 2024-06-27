import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { CartService } from '../../../services/cart.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-all-notes-section',
  standalone: true,
  imports: [CommonModule,PdfViewerModule],
  templateUrl: './all-notes-section.component.html',
  styleUrl: './all-notes-section.component.css',
})
export class AllNotesSectionComponent implements OnInit {
  currentFilter: string[] = [];
  currentContent = 'dfa';
  allNotes: any[] = [];
  lockedNotes: any[] = [];
  lockStatus: number = 0;
  selectedNoteId: string | null = null;
  filteredNotes: any[] = []
  pdfSrc = "https://wabisabi-notes-directory.s3.ap-south-1.amazonaws.com/pdfNotes/dmmy.pdf";
  notesService = inject(NotesService)
  cartService = inject(CartService);
  

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
    if (content === 'all') {
      this.lockStatus = 0;
    } else if (content === 'locked') {
      this.lockStatus = 1;
    } else if (content === 'unlocked') {
      this.lockStatus = 2;
    }
    this.applyLockFilter(this.lockStatus);
  }
  

 
  
  //Lock Filter 0-> All 1-> Locked 2-> Unlocked
  applyLockFilter(lockType: number) {
    if (lockType === 0) {
      this.filteredNotes = this.allNotes;
    } else if (lockType === 1) {
      this.filteredNotes = this.allNotes;
    } else {
      this.filteredNotes = this.allNotes.filter(note => !this.lockedNotes.includes(note));
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
      this.cartService.addToCart(item);
      // const localStorageData: any = localStorage.getItem('cart');
      // if(localStorageData && localStorageData !== '[]') {

      //   existingCart = JSON.parse(localStorageData) ;
      //   existingCart.push(item)

      //   localStorage.setItem('cart', JSON.stringify(existingCart));

      // } else {

      //   localStorage.setItem('cart', JSON.stringify([item]));
      // }
    } else {
      note.addedToCart = false;
      this.cartService.removeFromCart(note._id);
      // const localStorageData: any = localStorage.getItem('cart');
      // if(localStorageData && localStorageData !== '[]') {

      //   existingCart = JSON.parse(localStorageData) ;
      //   const cart = existingCart.filter((obj) => { return obj.id !== note._id })

      //   localStorage.setItem('cart', JSON.stringify(cart));
      // }
    }
  }
  toggleNoteDetails(noteId: string) {
    this.selectedNoteId = this.selectedNoteId === noteId ? null : noteId;
  }
  openPdfInNewTab() {
    const pdfWindow = window.open('', '_blank');
    if (pdfWindow) {
      pdfWindow.document.write(`
        <html>
          <head>
            <title>PDF</title>
          </head>
          <body style="margin:0;">
            <iframe src="${this.pdfSrc +'#toolbar=0'}" frameborder="0" style="border:none; width:100%; height:100vh;"></iframe>
          </body>
        </html>
      `);
    } else {

      console.error('Failed to open new window/tab for PDF.');
    }
  }
}
