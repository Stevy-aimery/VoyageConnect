import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  user: any = {
    nom: '',
    prenom: '',
    age: null,
    ecole: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Erreur d\'inscription', error);
        // Ajouter un message d'erreur pour l'utilisateur
      }
    );
  }
}