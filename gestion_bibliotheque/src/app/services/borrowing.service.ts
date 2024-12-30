import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {
  private apiUrl = 'http://localhost:3000/loans/';

  constructor(private http: HttpClient) {}

  getAllBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserBorrowings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/:userId`);  }


  borrowBook(bookId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, { bookId });
  }

  returnBook(borrowingId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${borrowingId}/return`, {});
  }
}

