// src/app/components/admin/loan-history/loan-history.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanService } from '../../../services/loan.service';
import { Loan } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-loan-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan-history.component.html',
})
export class LoanHistoryComponent implements OnInit {
  loans: Loan[] = [];

  constructor(private loanService: LoanService) {}

  ngOnInit(): void {
    this.loadLoanHistory();
  }

  loadLoanHistory(): void {
    this.loanService.getLoanHistory().subscribe({
      next: (loans) => {
        this.loans = loans;
      },
      error: (error) => {
        console.error('Failed to load loan history:', error);
      }
    });
  }
}
