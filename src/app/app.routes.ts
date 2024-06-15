import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { JajamComponent } from './pages/jajam/jajam.component';
import { NotesComponent } from './pages/notes/notes.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from './pages/return-policy/return-policy.component';
import { AccountComponent } from './pages/account/account.component';
import { TermsPageComponent } from './pages/terms-page/terms-page.component';
import { RedirectComponent } from './redirect/redirect.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"/home",pathMatch:"full"
    },
    {
        path:"home",component:HomeComponent
    },
    {
        path:"account",component: AccountComponent
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
    },
    {
        path: "cart", component: CartPageComponent,
    },
    {
        path: "privacy", component: PrivacyPolicyComponent,
    },
    {
        path: "returns", component: ReturnPolicyComponent,
    },
    {
        path: "terms", component: TermsPageComponent,
    },
    {
      path:"payment/redirect/:sessionId", component: RedirectComponent
    }

];
