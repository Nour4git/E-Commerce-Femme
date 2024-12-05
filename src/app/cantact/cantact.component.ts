import { Component } from '@angular/core';

@Component({
    selector: 'app-cantact',
    imports: [],
    templateUrl: './cantact.component.html',
    styleUrl: './cantact.component.scss',
    standalone:true
})
export class CantactComponent {
  message: string = ''; 

  name: string = '';
  email: string = '';
  subject: string = '';
  details: string = '';
  onSubmit(name: string, email: string, subject: string, details: string) {
    const messageC = document.getElementById('responseMessage')!;
    const messageBox = document.getElementById('responseMessage')!;

    
    if (!name || !email || !subject || !details) {
      this.message = 'Tous les champs doivent être remplis 😶.';
    } else if (name !== '' && email !== '' && subject !== '' && details !== '') {
      this.message = `Merci pour votre message, ${name}! Nous avons bien reçu votre demande concernant "${subject}". 🥰`;
    } else {
      this.message = 'Erreur dans la saisie de vos informations. Veuillez réessayer. 🙁';
    }

    messageBox.textContent = this.message;
    messageC.classList.add('show');
    setTimeout(() => {
      messageC.classList.remove('show');
    }, 9000);
  }
}
