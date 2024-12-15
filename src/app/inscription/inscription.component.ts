import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
  standalone:true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
})
export class InscriptionComponent {
  message: string = '';  

  onSubmit(email: string, password: string, confirmPassword: string) {
    const messageBox = document.getElementById('messageBox')!; 

    if (!email || !password || !confirmPassword) {
      this.message = 'Tous les champs doivent être remplis 😶.';
    } else if (password === confirmPassword) {
      this.message = `Inscription réussie pour ${email} 🎉!`;
    } else {
      this.message = 'Le mot de passe est incorrect ! ❌';
    }
    messageBox.textContent = this.message;

  

    setTimeout(() => {
      messageBox.classList.remove('show');
    }, 9000);}
}
