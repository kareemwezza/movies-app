import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() title!: string;
  @Input() id: number = 1;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  handleMovieView(id: number) {
    console.log('clicked');
    this._router.navigate(['/movie', this.id]);
  }
}
