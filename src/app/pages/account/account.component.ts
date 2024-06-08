import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent{

  constructor(@Inject(DOCUMENT) private document: Document, public auth: AuthService, private http: HttpClient, private router: Router) {}

  async loginAt() {
    const url = "https://dev-pluymneemvu6poxu.us.auth0.com/authorize?response_type=code&client_id=yv9MGoCNXrgtQwEFyWuNECWcdOLMv2Hp&redirect_uri=http://localhost:4200/dashboard&scope=openid%20name%20picture&state={state}"
    this.document.location.href = url
  }

  callApiHandler(){
    this.auth.loginWithRedirect()
    this.http.get('https://www.example.com').subscribe((res)=>{},)
  }
}
