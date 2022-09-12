import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'LoginRegister',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  constructor() {}

  @Input() type: String = 'login';
  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {}
}
