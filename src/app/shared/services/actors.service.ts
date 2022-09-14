import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import Actor from '../../types/actor';

let { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private _http: HttpClient) {}

  getActors() {
    return this._http.get<Actor[]>(`${apiUrl}/actor/getActors`);
  }

  getActor(id: number) {
    return this._http.get<Actor>(`${apiUrl}/actor/${id}`);
  }

  getActorByName(name: string) {
    return this._http.get<Actor>(`${apiUrl}/actor/${name}`);
  }
}
