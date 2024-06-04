import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../theme/layout/header/header.component';
import { AppComponent } from '../../app.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
