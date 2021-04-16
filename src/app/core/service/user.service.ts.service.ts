import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '@env';

import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    public router: Router
  ) {

  }

  getUsers(): Observable<any> {
    const url = `${environment.endPoint}users/`;
    return this.http.get<User[]>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  getUser(id: string): Observable<any> {
    const url = `${environment.endPoint}users/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Sign-up
  create(user: User): Observable<any> {
    const url = `${environment.endPoint}users`;
    return this.http.post(url, user, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }

  update(id: string, user: User): Observable<any> {
    const url = `${environment.endPoint}users/${id}`;
    return this.http.put<User>(url, user, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }

  delete(id: string) {
    const url = `${environment.endPoint}users/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .pipe(
        catchError(this.handleError)
      )
  }



  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
