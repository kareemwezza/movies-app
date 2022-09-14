import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Message, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

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

  @Input() type: String = 'login';
  username: string = 'wezza';
  email: string = 'wezzza@gmail.com';
  mobile: string = '12345678900';
  password: string = '123456';
  confirmPassword: string = '123456';

  ngOnInit(): void {}

  formObservable!: Observable<any>;

  handleFormSubmit() {
    if (this.type === 'login') {
      this.formObservable = this._authService.login(this.email, this.password);
    } else {
      this.formObservable = this._authService.register(
        this.email,
        this.username,
        this.mobile,
        this.password
      );
    }
    this.formObservable.subscribe(
      resData => {
        if (this.type === 'login') {
          this._router.navigate(['']);
        } else {
          this._router.navigate(['login']);
          this.showMessage('info');
          console.log(resData);
        }
      },
      error => {
        console.log(error);
        this.showMessage(error);
      }
    );
  }

  showMessage(message: string, severity: string = 'error') {
    this._messageService.add({
      severity: severity,
      summary: 'Failed',
      detail: message,
    });
  }
}
