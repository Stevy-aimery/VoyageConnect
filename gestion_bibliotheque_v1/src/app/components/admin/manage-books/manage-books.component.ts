// src/app/components/admin/manage-books/manage-books.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-manage-books',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-books.component.html',
})
export class ManageBooksComponent {
  newBook: Omit<Book, 'id' | 'available'> = {
    title: '',
    author: '',
    edition: ''
  };
  keywordsInput = '';

  constructor(private bookService: BookService) {}

  onSubmit(): void {
    const keywords = this.keywordsInput
      .split(',')
      .map((k) => k.trim())
      .filter((k) => k.length > 0);

    const bookToAdd = {
      ...this.newBook,
      keywords,
      available: true
    };

    this.bookService.addBook(bookToAdd).subscribe({
      next: () => {
        // Reset form
        this.newBook = {
          title: '',
          author: '',
          edition: ''
        };
        this.keywordsInput = '';
      },
      error: (error) => {
        console.error('Failed to add book:', error);
      }
    });
  }
}