import { Injectable } from '@angular/core';
import { catchError, throwError, tap, BehaviorSubject } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { environment } from '../../../environments/environment';
import User from '../../types/user.model';
import { Router } from '@angular/router';

let { apiUrl } = environment;

export interface AuthResponse {
  user_id: number;
  access_token: string;
  email: string;
  mobile: string;
  username: string;
  expire: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}
  user$ = new BehaviorSubject<User | null>(null);
  options = {
    headers: new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    ),
  };
  login(email: string, password: string) {
    let body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this._http
      .post<AuthResponse>(`${apiUrl}/login`, body.toString(), this.options)
      .pipe(
        catchError(this._handleError),
        tap(resData => {
          this._handleAuthentication(
            resData.user_id,
            resData.username,
            resData.email,
            resData.mobile,
            resData.access_token,
            resData.expire
          );
        })
      );
  }

  register(email: string, username: string, mobile: string, password: string) {
    const options2 = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
    };
    return this._http
      .post<AuthResponse>(
        `${apiUrl}/user/register`,
        {
          email: email,
          userName: username,
          mobile: mobile,
          password: password,
        },
        options2
      )
      .pipe(catchError(this._handleError));
  }

  logout() {
    this.user$.next(null);
    this._router.navigate(['/login']);
    localStorage.clear();
  }

  autoAuth() {
    const storage = localStorage.getItem('userData');
    if (!storage) {
      return;
    }
    const data = JSON.parse(storage);
    const loadedUser = new User(
      data.id,
      data.username,
      data.email,
      data.mobile,
      data._token,
      new Date(data._expiresIn)
    );
    // check if the user's token is not expired
    if (loadedUser.token) {
      this.user$.next(loadedUser);
    }
  }

  // Authenticated user are piped to the App
  private _handleAuthentication(
    id: number,
    username: string,
    email: string,
    mobile: string,
    token: string,
    expiresIn: number
  ) {
    const expiryDate = new Date(new Date().getTime() + 1000 * expiresIn);
    const newUser = new User(id, username, email, mobile, token, expiryDate);
    // Emit new created user to the app
    this.user$.next(newUser);
    localStorage.setItem('userData', JSON.stringify(newUser));
  }

  // Error Handling Observable
  private _handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    console.log(error);
    if (!error.error?.message || !error.error) {
      errorMessage = 'Undue Error Occurred please try again later.';
    } else {
      errorMessage = error.error.message;
    }
    return throwError(() => errorMessage);
  }
}
