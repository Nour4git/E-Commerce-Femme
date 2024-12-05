import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth); // Injection de Firebase Auth

  // Connexion utilisateur
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Inscription utilisateur
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}
