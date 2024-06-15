import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {


  @Input('sessionId') sessionId: string = ''
  paymentStatus: boolean = false;
  ngOnInit(){
    this.getSessionStatus()
  }

  async getSessionStatus(){

    const sessionResponse = await axios.get(`http://localhost:3000/payment/session-status?session_id=${this.sessionId}`);

    if(sessionResponse.data.status == 'open'){
      // if false, redirect don't clear cart
      this.paymentStatus = false;

    } else if(sessionResponse.data.status == 'complete'){

      this.paymentStatus = true;
      //do redirect, clear cart
    }

  }

}
