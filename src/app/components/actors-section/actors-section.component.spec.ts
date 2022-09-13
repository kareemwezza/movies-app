import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsSectionComponent } from './actors-section.component';

describe('ActorsSectionComponent', () => {
  let component: ActorsSectionComponent;
  let fixture: ComponentFixture<ActorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
