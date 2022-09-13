import { Component, Input, OnInit } from '@angular/core';
import Actor from '../../types/actor';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
})
export class MoviesSectionComponent implements OnInit {
  @Input() header: string = 'Top Movies';
  @Input() loading: boolean = true;
  @Input() list!: Actor[];
  constructor() {}

  ngOnInit(): void {}
}
