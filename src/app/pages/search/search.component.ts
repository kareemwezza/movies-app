import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/services/movies.service';
import Movie from 'src/app/types/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  loading: boolean = true;
  @Input() header: string = 'Result MOvies';
  randomfilm!: Movie;
  list!: Movie[];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    let number = this.randomIntFromInterval(1, 6);
    console.log(number);
    this._moviesService.getMovie(number).subscribe({
      next: value => {
        console.log(value.movieId);
        this.randomfilm = value;
        this.randomfilm.movieId = value.id as unknown as number;
      },
    });
  }
  myFunction(text: string) {
    this._moviesService.getMovieByName(text).subscribe({
      next: value => {
        console.log(value);
        this.list = value;
        // this.loading = false;
      },
    });
  }
  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
