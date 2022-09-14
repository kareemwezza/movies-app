import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import Movie from '../../types/movie';

let { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getMovies(category?: string) {
    category && (apiUrl = `${apiUrl}?category=${category}`);
    return this._http.get<Movie[]>(apiUrl);
  }

  getRecentMovies() {
    return this._http.get<Movie[]>((`${apiUrl}/movies/movieList`));
  }

  getMovie(id: number) {
    return this._http.get<Movie>(apiUrl);
  }
}
