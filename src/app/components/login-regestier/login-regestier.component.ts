import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'LoginRegister',
  templateUrl: './login-regestier.component.html',
  styleUrls: ['./login-regestier.component.scss'],
})
export class LoginRegestierComponent implements OnInit {
  constructor() {}

  @Input() type: String = 'login';
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {}
}
