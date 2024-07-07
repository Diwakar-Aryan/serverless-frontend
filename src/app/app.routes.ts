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
import { TexttileImageComponent } from './pages/contact-us-page/texttile-image/texttile-image.component';
import { BagruImageComponent } from './pages/contact-us-page/bagru-image/bagru-image.component';
import { RegionalPageComponent } from './pages/jajam/regional-page/regional-page.component';
import { BichhauniPageComponent } from './pages/collections/bichhauni-page/bichhauni-page.component';
import { ChaupadGameComponent } from './pages/collections/chaupad-game/chaupad-game.component';
import { BlockCarvingComponent } from './pages/workshop/workshop-images-screen/block-carving/block-carving.component';
import { BlockPrintingComponent } from './pages/workshop/workshop-images-screen/block-printing/block-printing.component';
import { NaturalDyeComponent } from './pages/workshop/workshop-images-screen/natural-dye/natural-dye.component';
import { NaturalIndigoComponent } from './pages/workshop/workshop-images-screen/natural-indigo/natural-indigo.component';
import { ResistPrintingComponent } from './pages/workshop/workshop-images-screen/resist-printing/resist-printing.component';
import { JajamSpreadComponent } from './pages/collections/jajam-spread/jajam-spread.component';
import { CharChaukorComponent } from './pages/collections/jajam-spread/char-chaukor/char-chaukor.component';
import { BarfiComponent } from './pages/collections/jajam-spread/barfi/barfi.component';
import { JourneyPageComponent } from './pages/jajam/journey-page/journey-page.component';

export const routes: Routes = [
    {
        path:"",redirectTo:"/home",pathMatch:"full"
    },
    {
        path:"home",component:HomeComponent
    },
    {
      path:"account",component: AccountComponent,
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
        path: "notes", component: NotesComponent,canActivate: [authGuard]
    },
    {
        path: "cart", component: CartPageComponent,canActivate: [authGuard]
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
    },
    {
        path: "jajam/region-mewar", component: MewarBoxComponent,
    },
    {
        path: "bagru", component: BagruImageComponent,
    },
    {
        path: "texttile", component: TexttileImageComponent,
    },
    {
        path: "jajam/regional", component: RegionalPageComponent,
    },
    {
        path: "jajam/journey", component: JourneyPageComponent,
    },

    {
        path: "collections/bedsheet-procession", component: BichhauniPageComponent,
    },
    {
        path: "collections/chaupad", component: ChaupadGameComponent,
    },
    {
        path: "collections/jajam-chaupad", component: JajamSpreadComponent,
    },
    {
        path: "collections/jajam-barfi", component: BarfiComponent,
    },
    {
        path: "collections/jajam-char-chaukor", component: CharChaukorComponent,
    },
    {
        path: "workshops/block-carving", component: BlockCarvingComponent,
    },
    {
        path: "workshops/block-printing", component: BlockPrintingComponent,
    },
    {
        path: "workshops/natural-dye", component: NaturalDyeComponent,
    },
    {
        path: "workshops/natural-indigo", component: NaturalIndigoComponent,
    },
    {
        path: "workshops/resist-printing", component: ResistPrintingComponent,
    }
];
