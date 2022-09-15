import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import Movie from '../../types/movie';
import { MenuItem, MessageService } from 'primeng/api';
import { MoviesService } from '../../shared/services/movies.service';
import { AuthService } from '../../shared/services/auth.service';
import User from '../../types/user.model';
import Actor from '../../types/actor';

@Component({
  selector: 'app-filmInfo',
  templateUrl: './filmInfo.component.html',
  styleUrls: ['./filmInfo.component.scss'],
})
export class FilmInfoComponent implements OnInit {
  items: MenuItem[] = [{ label: 'Home', routerLink: '/home' }];
  user!: User | null;
  movieId!: number;
  movie!: Movie;
  suggest!: Movie[];
  display: boolean = false;
  watchUrl!: SafeResourceUrl;
  movieActors!: Actor[];
  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _messageService: MessageService,
    private _authService: AuthService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this._authService.user$.subscribe(value => (this.user = value));
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this._messageService.clear();
      this.movieId = parseInt(id as unknown as string);
      this._moviesService.getMovie(this.movieId).subscribe({
        next: value => {
          this.movie = value;
          value.actors && (this.movieActors = value.actors);
          this.watchUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
            value.video as unknown as string
          );
          this.items = [this.items[0], { label: this.movie.movieName }];
        },
        error: err => {
          this._messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: 'Movie Can not be Found or Internal server error',
          });
        },
      });
      this._moviesService.getRecentMovies().subscribe({
        next: value => {
          this.suggest = value;
        },
      });
    });
  }

  showDialog() {
    this.display = true;
  }
}
