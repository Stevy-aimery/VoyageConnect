// src/app/components/user-loans/user-loans.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanService } from '../../services/loan.service';
import { AuthService } from '../../services/auth.service';
import { Loan } from '../../interfaces/interfaces';

@Component({
  selector: 'app-user-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-loans.component.html',
})
export class UserLoansComponent implements OnInit {
  loans: Loan[] = [];

  constructor(
    private loanService: LoanService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      const userId = user?.id;
      if (userId) {
        this.loadUserLoans(userId);
      }
    });
  }

  loadUserLoans(userId: number): void {
    this.loanService.getUserLoans(userId).subscribe({
      next: (loans) => {
        this.loans = loans;
      },
      error: (error) => {
        console.error('Failed to load loans:', error);
      }
    });
  }

  returnBook(loanId: number): void {
    this.loanService.returnBook(loanId).subscribe({
      next: (updatedLoan) => {
        const index = this.loans.findIndex((loan) => loan.id === loanId);
        if (index !== -1) {
          this.loans[index] = updatedLoan;
        }
      },
      error: (error) => {
        console.error('Failed to return book:', error);
      }
    });
  }
}