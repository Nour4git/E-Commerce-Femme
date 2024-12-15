import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
    selector: 'app-connexion',
    imports: [MatInputModule,MatFormFieldModule,FormsModule],
    templateUrl: './connexion.component.html',
    styleUrl: './connexion.component.scss',
    standalone:true
})
export class ConnexionComponent {
  message: string = '';

  onSubmit(email: string, password: string) {
    const messageC = document.getElementById('messageContainer')!;
    const messageBox = document.getElementById('messageBox')!;
    if (!email || !password) {
      this.message = 'Tous les champs doivent être remplis 😶.';
    } else if (email.includes('@') && password !=='') {
      this.message = 'Connexion réussie 🔓! Bienvenue.';
    } else {
      this.message = 'Email ou mot de passe incorrect.';
    }
  
  messageBox.textContent = this.message;

    messageC.classList.add('show');

    setTimeout(() => {
      messageC.classList.remove('show');
    }, 9000);

}}
