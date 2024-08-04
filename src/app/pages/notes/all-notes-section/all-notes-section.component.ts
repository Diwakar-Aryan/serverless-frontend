import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { CartService } from '../../../services/cart.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-all-notes-section',
  standalone: true,
  imports: [CommonModule, PdfViewerModule],
  templateUrl: './all-notes-section.component.html',
  styleUrl: './all-notes-section.component.css',
})
export class AllNotesSectionComponent implements OnInit {
  s3Url: string =
    'https://wabisabi-notes-directory.s3.ap-south-1.amazonaws.com/';
  pdf: string = 'pdfNotes';
  cover: string = 'cover';
  currentContent = 'dfa';
  allNotes: any[] = [];
  lockedNotes: any[] = [];
  lockStatus: number = 0;
  selectedNoteId: string | null = null;
  selectedNotes: any = null;
  filteredNotes: any[] = [];
  pdfSrc = '';
  coverSrc = '';
  notesService = inject(NotesService);
  cartService = inject(CartService);

  ACCESS = {
    ALL: 'all',
    LOCKED: 'locked',
    UNLOCKED: 'unlocked',
  };
  TOPIC = {
    ALL: 'all',
    PLACE: 'place',
  };
  LANGUAGE = {
    ALL: 'all',
    ENGLISH: 'English',
  };
  TAGS = {
    PURCHASED: 0,
    CART: 1,
    PRICE: 2,
  };

  currentFilter: {
    accessFilter: string;
    topicFilter: string;
    languageFilter: string;
  } = {
    accessFilter: this.ACCESS.ALL,
    topicFilter: this.TOPIC.ALL,
    languageFilter: this.LANGUAGE.ALL,
  };

  async ngOnInit(): Promise<void> {
    this.allNotes = await this.notesService.getAllNotes();
    this.lockedNotes = await this.notesService.getLockedNotes();
    this.applyFilter()
    this.applyLockFilter(0);   // Remove it and use new above new functions and remove lockstatus from code to use specific locks
    const localStorageData = localStorage.getItem('cart');
    if (localStorageData) {
      const cartItems = JSON.parse(localStorageData);
      this.allNotes.forEach((note) => {
        note.addedToCart = cartItems.some(
          (item: { id: any }) => item.id === note._id
        );
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
    } else if (content === 'All-place') {
      this.lockStatus = 4;
    } else if (content === 'PLACEHOLDER') {
      this.lockStatus = 5;
    } else if (content === 'All-eng') {
      this.lockStatus = 6;
    } else if (content === 'ENGLISH') {
      this.lockStatus = 7;
    }
    this.applyLockFilter(this.lockStatus);
  }

  applyFilter(
    accessFilter?: string,
    languageFilter?: string,
    topicFilter?: string
  ) {
    if (accessFilter) this.currentFilter['accessFilter'] = accessFilter;
    if (languageFilter) this.currentFilter['languageFilter'] = languageFilter;
    if (topicFilter) this.currentFilter['topicFilter'] = topicFilter;

    this.renderNotesDataBasedOnFilter();
  }

  renderNotesDataBasedOnFilter() {
    // check for filters one by one and then render data

    // checking data for access filter
    this.applyAccessLockFilter(this.currentFilter['accessFilter']);

    // checking data for language filter
    this.applyLanguageLockFilter(this.currentFilter['languageFilter']);

    //checking data for topic filter
    this.applyTopicLockFilter(this.currentFilter['topicFilter']);

    //checking data for its tagStaus i.e if it is in cart or unlocked or locked
    // this.filteredNotes.forEach((note) => {
    //   note.tagStatus = this.TAGS.PRICE;
    //   console.log(note.tagStatus)
    //   console.log(`price ${this.TAGS.PRICE}`)
    //   if (this.lockedNotes.filter((lnote) => lnote._id === note._id)) {
    //     note.tagStatus = this.TAGS.PURCHASED;
    //     console.log(`price ${note.tagStatus }`)
    //     console.log(`price ${note._id }`)
    //     return;
    //   } else if (note?.addedToCart) {
    //     note.tagStatus = this.TAGS.CART;
    //     console.log(`price ${note.tagStatus }`)
    //   }
    // });
    this.filteredNotes.forEach((note) => {
      if (this.lockedNotes.some((lnote) => lnote._id === note._id)) {
        note.tagStatus = this.TAGS.PURCHASED;
      } else if (note?.addedToCart) {
        note.tagStatus = this.TAGS.CART;
      } else {
        note.tagStatus = this.TAGS.PRICE;
        
      }
    });
  }

  applyAccessLockFilter(filter: string) {
    if (filter === this.ACCESS.ALL) {
      this.filteredNotes = this.allNotes;
    } else if (filter === this.ACCESS.LOCKED) {
      this.filteredNotes = this.allNotes.filter(
        (note) => !this.lockedNotes.find((lnote) => lnote._id === note._id)
      );
    } else {
      this.filteredNotes = this.lockedNotes;
    }
  }

  applyTopicLockFilter(filter: string) {
    if (filter === this.TOPIC.ALL) {
      this.filteredNotes = this.filteredNotes;
    } else if (filter === this.ACCESS.LOCKED) {
      this.filteredNotes = this.filteredNotes;
    }
  }

  applyLanguageLockFilter(filter: string) {
    if (filter === this.LANGUAGE.ALL) {
      this.filteredNotes = this.filteredNotes;
    } else if (filter === this.LANGUAGE.ENGLISH) {
      this.filteredNotes = this.filteredNotes.filter(
        (note) => note.language === this.LANGUAGE.ENGLISH
      );
    }
  }

  //Lock Filter 0-> All 1-> Locked 2-> Unlocked
  applyLockFilter(lockType: number) {
    if (lockType === 0) {
      this.filteredNotes = this.allNotes;
    } else if (lockType === 1) {
      this.filteredNotes = this.allNotes;
    } else {
      this.filteredNotes = this.allNotes.filter(
        (note) => !this.lockedNotes.includes(note)
      );
    }
  }

  generateCoverAndPDfSource() {
    this.pdfSrc = `${this.s3Url}${this.pdf}/${this.selectedNotes.name}.pdf`;
    this.coverSrc = `${this.s3Url}${this.cover}/${this.selectedNotes.name}.jpg`;
  }

  updateCart(note: any, add: boolean) {
    let existingCart: any[];
    const item = {
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
  toggleNoteDetails(note: any) {
    this.selectedNoteId = this.selectedNoteId === note?._id ? null : note._id;
    this.selectedNotes = note;
    this.generateCoverAndPDfSource()
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
            <iframe src="${
              this.pdfSrc + '#toolbar=0'
            }" frameborder="0" style="border:none; width:100%; height:100vh;"></iframe>
          </body>
        </html>
      `);
    } else {
      console.error('Failed to open new window/tab for PDF.');
    }
  }
}
