import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './theme/layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbComponent } from './theme/shared/components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
