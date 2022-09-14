import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorprofileComponent } from './actorprofile.component';

describe('ActorprofileComponent', () => {
  let component: ActorprofileComponent;
  let fixture: ComponentFixture<ActorprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
