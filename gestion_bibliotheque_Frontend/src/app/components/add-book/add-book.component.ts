import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService, Book } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
})
export class AddBookComponent {
  book: Book = {
    titre: '',
    auteur: '',
    edition: ''
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(
      () => {
        this.router.navigate(['/books']);
      },
      error => console.error('Erreur lors de l\'ajout du livre', error)
    );
  }
}

