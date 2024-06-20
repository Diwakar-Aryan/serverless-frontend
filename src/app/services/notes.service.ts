import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() {
    axios.interceptors.request.use(config => {
      const authToken = localStorage.getItem('tokenId');
      if(authToken) {
        config.headers.Authorization = `Bearer ${authToken}`
      }
      return config;
    })
  }

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

  async getLockedNotes() {
    try {
      const notesResponse = await axios.get(`${environment.BACKENDAPI}notes/locked`);
      if(notesResponse.status === 200 ) {
        return notesResponse.data;
      } else {
        return [];
      }
    } catch (error) {

    }
  }
}
