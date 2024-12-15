import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const firebaseConfig = {
  apiKey: "AIzaSyA6ekSIADcqmBKZNCaO-rbJsisjbnAymgg",
  authDomain: "e-commerce-star-girl.firebaseapp.com",
  projectId: "e-commerce-star-girl",
  storageBucket: "e-commerce-star-girl.appspot.com",
  messagingSenderId: "688772076217",
  appId: "1:688772076217:web:3c82f8dae32af392fd4168",
  measurementId: "G-SN0RY29427"
};

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,ConnexionComponent,InscriptionComponent,MatToolbarModule,MatIconModule,MatButtonModule
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
