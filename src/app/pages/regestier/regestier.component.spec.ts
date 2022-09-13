import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestierComponent } from './regestier.component';

describe('RegestierComponent', () => {
  let component: RegestierComponent;
  let fixture: ComponentFixture<RegestierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegestierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
