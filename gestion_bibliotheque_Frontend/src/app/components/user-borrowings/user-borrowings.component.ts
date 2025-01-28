import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowingService } from '../../services/borrowing.service';

@Component({
  selector: 'app-user-borrowings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-borrowings.component.html',
})
export class UserBorrowingsComponent implements OnInit {
  borrowings: any[] = [];

  constructor(private borrowingService: BorrowingService) {}

  ngOnInit() {
    this.borrowingService.getUserBorrowings().subscribe(
      borrowings => this.borrowings = borrowings,
      error => console.error('Erreur lors du chargement des emprunts', error)
    );
  }
}

