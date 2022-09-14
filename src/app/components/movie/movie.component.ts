import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Movie from '../../types/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie!: Movie;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  handleMovieView() {
    console.log('clicked');
    this._router.navigate(['/movie', this.movie.movieId]);
  }
}
