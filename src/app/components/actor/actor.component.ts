import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Actor from 'src/app/types/actor';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {
  @Input() actor!: Actor;
  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  gotoprofile()
  {
    this.router.navigate(['/actor', this.actor.actorId])

  }
}
