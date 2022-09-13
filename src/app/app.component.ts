import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movies-app';
  constructor(
    private _authService: AuthService,
    private primengConfig: PrimeNGConfig
  ) {}
  ngOnInit() {
    this._authService.autoAuth();
    this.primengConfig.ripple = true;
  }
}
