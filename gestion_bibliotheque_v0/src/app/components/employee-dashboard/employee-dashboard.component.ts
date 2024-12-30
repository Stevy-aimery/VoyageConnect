import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { BorrowingService } from '../../services/borrowing.service';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./employee-dashboard.component.html"
})
export class EmployeeDashboardComponent implements OnInit {
  newBook: any = {
    title: '',
    author: '',
    isbn: ''
  };
  borrowings: any[] = [];

  constructor(
    private bookService: BookService,
    private borrowingService: BorrowingService
  ) {}

  ngOnInit() {
    this.loadBorrowings();
  }

  addBook() {
    this.bookService.addBook(this.newBook).subscribe(
      () => {
        this.newBook = { title: '', author: '', isbn: '' };
        // Ajouter un message de succès pour l'employé
      },
      error => console.error('Erreur lors de l\'ajout du livre', error)
    );
  }

  loadBorrowings() {
    this.borrowingService.getAllBorrowings().subscribe(
      borrowings => this.borrowings = borrowings,
      error => console.error('Erreur lors du chargement des emprunts', error)
    );
  }

  returnBook(borrowingId: string) {
    this.borrowingService.returnBook(borrowingId).subscribe(
      () => {
        this.loadBorrowings();
        // Ajouter un message de succès pour l'employé
      },
      error => console.error('Erreur lors du retour du livre', error)
    );
  }
}

