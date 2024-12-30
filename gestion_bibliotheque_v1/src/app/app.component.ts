// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="min-h-screen bg-gray-100">
      @if (currentUser$ | async; as user) {
        <nav class="bg-white shadow">
          <div class="container mx-auto px-4">
            <div class="flex h-16 items-center justify-between">
              <div class="flex items-center space-x-4">
                <a routerLink="/books" class="text-gray-700 hover:text-gray-900">
                  Books
                </a>
                <a
                  routerLink="/my-loans"
                  class="text-gray-700 hover:text-gray-900"
                >                
                  My Loans
                </a>

                @if (isAdmin) {
                  <a
                    routerLink="/admin/loans"
                    class="text-gray-700 hover:text-gray-900"
                  >
                    Loan History
                  </a>
                  <a
                    routerLink="/admin/books"
                    class="text-gray-700 hover:text-gray-900"
                  >
                    Manage Books
                  </a>
                }
              </div>
              <button
                (click)="logout()"
                class="rounded bg-red-500 px-4 py-2 text-white"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      }
      <router-outlet />
    </div>
  `
})
export class AppComponent {
  currentUser$;
  isAdmin;

  constructor(private authService: AuthService) {
    this.currentUser$ = this.authService.currentUser$;
    this.isAdmin = this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
  }
}