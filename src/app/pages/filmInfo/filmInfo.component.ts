import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import Movie from '../../types/movie';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem, MessageService } from 'primeng/api';
import { MoviesService } from '../../shared/services/movies.service';

@Component({
  selector: 'app-filmInfo',
  templateUrl: './filmInfo.component.html',
  styleUrls: ['./filmInfo.component.scss'],
})
export class FilmInfoComponent implements OnInit {
  movieId!: number;
  movie: Movie;

  items: MenuItem[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _moviesService: MoviesService,
    private _messageService: MessageService
  ) {
    this.movie = {
      movieId: 5,
      movieName: 'Spider man No Way Home',
      category: 'Action, Adventure',
      image: '/../../../assets/images/spiderman.jpg',
      releasedYear: 2022,
      rating: '4.5',
      age: 12,
    };
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Spider man No Way Home' },
    ];
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.movieId = parseInt(id as unknown as string);
      this._moviesService.getMovie(this.movieId).subscribe({
        next: value => {
          this.movie = value;
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
