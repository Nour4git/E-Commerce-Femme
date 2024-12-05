import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-commander',
  standalone:true,
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
  
})
export class CommanderComponent {
  message: string = '';

  num: string = '';
  Adr: string = '';
  info: string = '';

  onSubmit(num: string, Adr: string, info: string) {
    const messageC = document.getElementById('messageContainer')!;
    const messageBox = document.getElementById('messageBox')!;
    
    if (!Adr || !num || !info) {
      this.message = 'Tous les champs doivent être remplis 😶 .';
    } else if (Adr !== '' && num !== '' && info !== '') {
      this.message = 'Commande réussie. Vous recevrez un appel de confirmation dans 24 heures 🥰 ! Restez joignable, ma belle. 🌸';
    } else {
      this.message = 'Erreur repeter la saisie de votre information !!.';
    }

    messageBox.textContent = this.message;

    messageC.classList.add('show');

    setTimeout(() => {
      messageC.classList.remove('show');
    }, 9000);

}}