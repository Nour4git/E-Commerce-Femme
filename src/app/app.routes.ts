import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SacComponent } from './sac/sac.component';
import { ManteauComponent } from './manteau/manteau.component';
import { OutfitComponent } from './outfit/outfit.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CantactComponent } from './cantact/cantact.component';
import { CommanderComponent } from './commander/commander.component';


export const routes: Routes = [
    
    { path: '', component: AcceuilComponent },
    { path: 'sac', component: SacComponent },
    { path: 'manteau', component: ManteauComponent },
    { path: 'outf', component: OutfitComponent },
    { path: 'insc', component: InscriptionComponent},
    { path: 'connex', component: ConnexionComponent },
    { path: 'cant', component: CantactComponent },
    { path: 'commander', component: CommanderComponent },


];
