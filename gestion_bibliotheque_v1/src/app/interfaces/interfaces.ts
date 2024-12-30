// src/app/interfaces/interfaces.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    edition: string;
    available: boolean;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    role: 'ADMIN' | 'USER';
    password: string;
  }
  
  export interface Loan {
    id: number;
    bookId: number;
    userId: number;
    borrowDate: Date;
    returnDate?: Date;
    status: 'ACTIVE' | 'RETURNED';
  }
  