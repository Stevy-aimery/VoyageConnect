import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then((m) => m.LoginComponent)
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./components/book-search/book-search.component').then(
        (m) => m.BookSearchComponent
      ),
    canActivate: [authGuard]
  },
  {
    path: 'my-loans',
    loadComponent: () =>
      import('./components/user-loans/user-loans.component').then(
        (m) => m.UserLoansComponent
      ),
    canActivate: [authGuard]
  },
  {
    path: 'admin/loans',
    loadComponent: () =>
      import('./components/admin/loan-history/loan-history.component').then(
        (m) => m.LoanHistoryComponent
      ),
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'admin/books',
    loadComponent: () =>
      import('./components/admin/manage-books/manage-books.component').then(
        (m) => m.ManageBooksComponent
      ),
    canActivate: [authGuard, adminGuard]
  }
];