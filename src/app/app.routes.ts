import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { JajamComponent } from './pages/jajam/jajam.component';
import { NotesComponent } from './pages/notes/notes.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"/home",pathMatch:"full"
    },
    {
        path:"home",component:HomeComponent
    },
     {
         path: "workshops", component: WorkshopComponent, 
    },
    {
        path: "collections", component: CollectionsComponent,
    },
    {
        path: "jajam", component: JajamComponent,
    },
    {
        path: "notes", component: NotesComponent,
    }
];
