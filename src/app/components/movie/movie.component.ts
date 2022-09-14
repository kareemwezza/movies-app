import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() title!: string;
  @Input() image!: string;
  @Input() age!: number;
  // @Input() width!: number;

  constructor() {}

  ngOnInit(

  ): void {}
}
