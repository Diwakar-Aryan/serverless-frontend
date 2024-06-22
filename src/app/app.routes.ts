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
import { DhundharBoxComponent } from './pages/jajam/regional-page/dhundhar-box/dhundhar-box.component';
import { HadotiBoxComponent } from './pages/jajam/regional-page/hadoti-box/hadoti-box.component';
import { AjmerBoxComponent } from './pages/jajam/regional-page/ajmer-box/ajmer-box.component';
import { MarwarBoxComponent } from './pages/jajam/regional-page/marwar-box/marwar-box.component';
import { MewarBoxComponent } from './pages/jajam/regional-page/mewar-box/mewar-box.component';
import { SekhawatiBoxComponent } from './pages/jajam/regional-page/sekhawati-box/sekhawati-box.component';
import { authGuard } from './theme/shared/services/auth-guard/auth.guard';
import { ContactUsPageComponent } from './pages/contact-us-page/contact-us-page.component';
import { RedirectComponent } from './redirect/redirect.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"/home",pathMatch:"full"
    },
    {
        path:"home",component:HomeComponent
    },
    {
      path:"account",component: AccountComponent,canActivate: [authGuard] 
    },
    {
         path: "workshops", component: WorkshopComponent,
    },
    {
        path: "collections", component: CollectionsComponent,
    },
    {
        path: "jajam", component: JajamComponent ,
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
       
    },
    {
        path: "contactus", component: ContactUsPageComponent,

    },
    {
        path: "jajam/region-ajmer", component: AjmerBoxComponent,
    },
    {
        path: "jajam/region-dhundhar", component: DhundharBoxComponent,
    },
    {
        path: "jajam/region-hadoti", component: HadotiBoxComponent,
    },
    {
        path: "jajam/region-marwar", component: MarwarBoxComponent,
    },
    {
        path: "jajam/region-mewar", component: MewarBoxComponent,
    },
    {
        path: "jajam/region-sekhawati", component: SekhawatiBoxComponent,
    }

];
