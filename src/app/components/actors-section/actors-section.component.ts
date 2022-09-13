import { Component, Input, OnInit } from '@angular/core';
import Actor from '../../types/actor';

@Component({
  selector: 'app-actors-section',
  templateUrl: './actors-section.component.html',
  styleUrls: ['./actors-section.component.scss'],
})
export class ActorsSectionComponent implements OnInit {
  @Input() header: string = 'Top Actors';
  @Input() loading: boolean = true;
  @Input() list!: Actor[];

  constructor() {}

  ngOnInit(): void {}
}
