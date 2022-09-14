import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
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
  ) { }

  @Input() type: String = '';

  username: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmPassword: string = '';

  ngOnInit(): void { }

  formObservable!: Observable<any>;

  handleFormSubmit() {

    if (this.type === 'login') {

      if (!validateEmail(this.email)) {
        this.showMessage("Email is not Valid")



      } else if (this.password.length < 6) {
        this.showMessage("Password Lenght is short")
      } else {
        this.formObservable = this._authService.login(this.email, this.password);
      }


    } else if (this.type === 'register') {


      if (!validateEmail(this.email)) {
        this.showMessage("Email is not Valid")



      } else if (this.password.length < 6) {
        this.showMessage("Password Lenght is short")

      } else if (!confirmPassword(this.password, this.confirmPassword)) {
          this.showMessage("Passwords Not Matched")
      }
      else {
        this.formObservable = this._authService.register(
          this.email,
          this.username,
          this.mobile,
          this.password
        );
      }

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
