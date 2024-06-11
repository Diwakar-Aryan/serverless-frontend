import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent{
  email: string | null = null;
  initials: string | null = null;

  constructor(public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      if (user && user.email) {
        this.email = user.email;
        this.initials = this.email.substring(0, 2).toUpperCase();
      }
    });
  }
  async loginAt() {
    // const url = "https://dev-pluymneemvu6poxu.us.auth0.com/authorize?response_type=code&client_id=yv9MGoCNXrgtQwEFyWuNECWcdOLMv2Hp&redirect_uri=http://localhost:4200/dashboard&scope=openid%20name%20picture&state={state}"
    // this.document.location.href = url
    this.auth.loginWithRedirect();
  }

  callApiHandler(){
    this.auth.loginWithRedirect()
    this.http.get('https://www.example.com').subscribe((res)=>{},)
  }
  
}
