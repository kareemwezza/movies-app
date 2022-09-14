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
  email: string = 'wezza@gmail.com';
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
        this._router.navigate(['/']);
        console.log(resData);
      },
      error => {
        console.log(error);
        this.showMessage(error);
      }
    );
  }

  showMessage(message: string) {
    this._messageService.add({
      severity: 'error',
      summary: 'Failed',
      detail: message,
    });
  }
}
