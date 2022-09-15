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
  @Input() header: string = 'Search Results In Movies:';
  randomfilm!: Movie | null;
  list!: Movie[];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    let number = this.randomIntFromInterval(1, 6);
    this._moviesService.getMovie(number).subscribe({
      next: value => {
        this.randomfilm = value;
        this.randomfilm.movieId = value.id as unknown as number;
      },
    });
  }
  myFunction(text: string) {
    this._moviesService.getMovieByName(text).subscribe({
      next: value => {
        this.randomfilm = null;
        this.list = value;
      },
    });
  }
  randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
