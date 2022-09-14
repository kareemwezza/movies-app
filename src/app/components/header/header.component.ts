import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import User from '../../types/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User | null;
  showMobileMenu: boolean = false;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.user$.subscribe(value => {
      this.user = value;
    });
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  logMeOut() {
    this._authService.logout();
  }
}
