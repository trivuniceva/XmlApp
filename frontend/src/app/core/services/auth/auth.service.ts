import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  private userRoleSubject = new BehaviorSubject<string>('');
  userRole$ = this.userRoleSubject.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', { username, password });
  }

  storageHandle({ user }: { user: any }) {
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.userRoleSubject.next(user.userRole);
  }

  signup(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, userData).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    console.log(localStorage);
    localStorage.removeItem('loggedUser');
    this.userRoleSubject.next('');
    console.log(localStorage);
    this.router.navigate(['/login']);
  }
}


