import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Check if there's a stored token and update the auth state accordingly
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      // Use the AuthService to update the current user
      this.authService.updateCurrentUser(JSON.parse(storedUser));
    }

    // Uncomment the following line if you want to always log out the user on startup
    // this.authService.clearAuthOnStartup();

    // Check the authentication status
    this.authService.checkAuthStatus().subscribe();
  }
}

