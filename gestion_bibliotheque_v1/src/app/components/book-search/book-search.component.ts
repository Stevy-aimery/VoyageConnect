// src/app/components/book-search/book-search.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { LoanService } from '../../services/loan.service';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './book-search.component.html',
})
export class BookSearchComponent implements OnInit {
  books: Book[] = [];
  searchQuery = '';
  isAdmin = false;

  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private loanService: LoanService
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.loadBooks();
  }

  onSearch(): void {
    if (this.searchQuery.length > 2) {
      this.bookService.searchBooks(this.searchQuery).subscribe({
        next: (books) => {
          this.books = books;
        },
        error: (error) => {
          console.error('Search failed:', error);
        }
      });
    }
  }
  getbooks(): Book[] {
    return this.books;
  }

  loadBooks(): void {
    this.bookService.searchBooks('').subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (error) => {
        console.error('Failed to load books:', error);
      }
    });
  }

  borrowBook(book: Book): void {
    this.authService.currentUser$.subscribe(user => {
      const userId = user?.id;
      if (userId) {
        this.loanService.borrowBook(userId, book.id).subscribe({
          next: () => {
            book.available = false;
          },
          error: (error) => {
            console.error('Failed to borrow book:', error);
          }
        });
      }
    });
  }

  updateBook(book: Book): void {
    // Implement edit functionality for admins
    
  }
}