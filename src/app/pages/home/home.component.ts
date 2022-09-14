import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../shared/services/actors.service';
import Movie from '../../types/movie';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  recentMovies: Movie[] = [];
  constructor(
    private _actorService: ActorsService,
    private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.recentMovies = [
        {
          movieName: 'A',
          movieId: 1,
          category: 'a',
          image: '',
          rating: '',
          releasedYear: 2012,
          age: 12,
        },
      ];
    }, 1000);
    this._actorService.getActors().subscribe({
      next: value => {
        console.log(value);
      },
    });
    this._moviesService.getRecentMovies().subscribe({
      next: value => {
        console.log(value);
        this.loading = false;
      },
    });
  }
}
