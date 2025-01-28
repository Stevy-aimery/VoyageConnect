import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  nom: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.nom, this.password).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        console.error('Erreur de connexion', error);
        // Ajouter un message d'erreur pour l'utilisateur
      }
    );
  }
}

