import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../shared/services/actors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  constructor(private _actorService: ActorsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 10000);
    this._actorService.getActors().subscribe({
      next: value => console.log(value),
    });
  }
}
