import { Injectable } from '@angular/core';
import { Subject, catchError, throwError, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import User from '../../types/user.model';

let { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  user$ = new Subject<User>();

  login(email: string, password: string) {
    return this._http
      .post<any>(apiUrl, {
        email: email,
        password: password,
      })
      .pipe(
        catchError(this._handleError),
        tap(resData => {
          this._handleAuthentication(
            resData.id,
            resData.username,
            resData.email,
            resData.mobile,
            resData.token,
            resData.expiresIn
          );
        })
      );
  }

  register(email: string, username: string, mobile: number, password: string) {
    return this._http
      .post<any>(apiUrl, {
        email: email,
        username: username,
        mobile: mobile,
        password: password,
      })
      .pipe(
        catchError(this._handleError),
        tap(resData => {
          this._handleAuthentication(
            resData.id,
            resData.username,
            resData.email,
            resData.mobile,
            resData.token,
            resData.expiresIn
          );
        })
      );
  }

  // Authenticated user are piped to the App
  private _handleAuthentication(
    id: number,
    username: string,
    email: string,
    mobile: number,
    token: string,
    expiresIn: number
  ) {
    const expiryDate = new Date(new Date().getTime() + 1000 * expiresIn);
    const newUser = new User(id, username, email, mobile, token, expiryDate);
    this.user$.next(newUser);
  }

  // Error Handling Observable
  private _handleError(error: HttpErrorResponse) {
    let errorMessage = 'Undue Error Occurred please try again later.';
    return throwError(() => errorMessage);
  }
}
