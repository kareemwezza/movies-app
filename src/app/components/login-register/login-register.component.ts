import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { validateEmail } from 'src/app/utils/validate';
import { confirmPassword } from 'src/app/utils/validate';

@Component({
  selector: 'LoginRegister',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _messageService: MessageService,
    private _router: Router
  ) {}

  @Input() type: String = '';
  username: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {}

  handleFormSubmit() {
    if (this.type === 'login') {
      if (!validateEmail(this.email)) {
        this.showMessage('Email is not Valid');
      } else if (this.password.length < 6) {
        this.showMessage('Weak Password length');
      } else {
        this._authService.login(this.email, this.password).subscribe(
          resData => {
            if (this.type === 'login') {
              this._router.navigate(['']);
            }
          },
          error => {
            this.showMessage(error);
          }
        );
      }
    } else if (this.type === 'register') {
      if (!validateEmail(this.email)) {
        this.showMessage('Email is not Valid');
      } else if (this.password.length < 6) {
        this.showMessage('Password Lenght is short');
      } else if (!confirmPassword(this.password, this.confirmPassword)) {
        this.showMessage('Passwords Not Matched');
      } else if (this.mobile.length < 11) {
        this.showMessage('Mobile Number is not correct');
      } else {
        this._authService
          .register(this.email, this.username, this.mobile, this.password)
          .subscribe(
            resData => {
              this._messageService.clear();
              this.showMessage(
                'Confirmation E-mail send. redirecting go to login...',
                'success',
                'Success'
              );
              setTimeout(() => {
                this._router.navigate(['login']);
              }, 3000);
            },
            error => {
              this.showMessage(error);
            }
          );
      }
    }
  }

  showMessage(
    message: string,
    severity: string = 'error',
    status: string = 'Failed'
  ) {
    this._messageService.add({
      severity: severity,
      summary: status,
      detail: message,
    });
  }
}
