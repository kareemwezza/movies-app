import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../shared/services/actors.service';
import Movie from '../../types/movie';
import { MoviesService } from '../../shared/services/movies.service';
import Actor from 'src/app/types/actor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  recentMovies: Movie[] = [];
  actors: Actor[] = [];
  constructor(
    private _actorService: ActorsService,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this._actorService.getActors().subscribe({
      next: value => {
        this.actors = value;
        this.loading = false;
      },
    });
    this._moviesService.getRecentMovies().subscribe({
      next: value => {
        console.log(value);
        this.recentMovies = value;
      },
    });
  }
}
