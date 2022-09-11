import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(email: string, password: string) {
    return;
  }

  register(email: string, username: string, mobile: number, password: string) {
    return;
  }
}
