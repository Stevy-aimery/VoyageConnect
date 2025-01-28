import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  updateCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }

  login(nom: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { nom, password })
      .pipe(tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  
  isEmployee(): boolean {
    const user = this.currentUserValue;
    return user && user.role === 'employee';
  }

  checkAuthStatus(): Observable<boolean> {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      // Here, you should check the validity of the token with your backend
      return this.http.get<boolean>(`${this.apiUrl}/check-auth`).pipe(
        tap(isValid => {
          if (isValid) {
            this.currentUserSubject.next(user);
          } else {
            this.logout();
          }
        }),
        catchError(() => {
          this.logout();
          return of(false);
        })
      );
    } else {
      this.logout();
      return of(false);
    }
  }

  clearAuthOnStartup() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}

