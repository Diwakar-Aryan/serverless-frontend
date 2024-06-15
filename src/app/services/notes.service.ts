import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {}

  async getAllNotes() {
    try {
      const notesResponse = await axios.get(`${environment.BACKENDAPI}notes`);
      if(notesResponse.status === 200 ) {
        return notesResponse.data;
      } else {
        return [];
      }

    } catch (error) {
      console.error(error)
    }
  }
}
