import { Component, Input, OnInit } from '@angular/core';
import Movie from '../../types/movie';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
})
export class MoviesSectionComponent implements OnInit {
  @Input() header: string = 'Top Movies';
  @Input() loading: boolean = false;
  @Input() list!: Movie[];
  constructor() {}

  ngOnInit(): void {}
}
