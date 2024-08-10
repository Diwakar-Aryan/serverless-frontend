import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent implements OnInit{


  @Input('sessionId') sessionId: string = ''
  paymentStatus: boolean = false;

  ngOnInit(){
    axios.interceptors.request.use(config => {
      const authToken = localStorage.getItem('tokenId');
      if(authToken) {
        config.headers.Authorization = `Bearer ${authToken}`
      }
      return config;
    })

    this.getSessionStatus()
  }

  async getSessionStatus(){

    const sessionResponse = await axios.get(`http://43.204.116.18:3000/payment/session-status?session_id=${this.sessionId}`);

    if(sessionResponse.data.status == 'open'){
      // if false, redirect don't clear cart
      this.paymentStatus = false;

    } else if(sessionResponse.data.status == 'complete'){

      this.paymentStatus = true;
      //do redirect, clear cart

      localStorage.setItem('cart', JSON.stringify([]))
    }

  }

}
