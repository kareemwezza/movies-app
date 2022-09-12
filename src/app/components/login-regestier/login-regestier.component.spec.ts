import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegestierComponent } from './login-regestier.component';

describe('LoginRegestierComponent', () => {
  let component: LoginRegestierComponent;
  let fixture: ComponentFixture<LoginRegestierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegestierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegestierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
