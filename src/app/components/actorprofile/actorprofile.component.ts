import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActorsService } from '../../shared/services/actors.service';
import Actor from 'src/app/types/actor';
import User from 'src/app/types/user.model';
import Movie from 'src/app/types/movie';

@Component({
  selector: 'app-actorprofile',
  templateUrl: './actorprofile.component.html',
  styleUrls: ['./actorprofile.component.scss'],
})
export class ActorprofileComponent implements OnInit {
  items: MenuItem[] = [{ label: 'Home', routerLink: '/home' }];
  user!: User | null;
  actorId!: number;
  actor!: Actor;
  suggest!: Actor[];
  list!: Movie[];
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _actorService: ActorsService,
    private _messageService: MessageService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this._authService.user$.subscribe(value => (this.user = value));
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.actorId = parseInt(id as unknown as string);
      this._actorService.getActor(this.actorId).subscribe({
        next: value => {
          this.actor = value;
          this.list = value.movies;
          this.loading = false;
        },
        error: err => {
          this._messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: err.error.message,
          });
        },
      });
    });
  }
}
