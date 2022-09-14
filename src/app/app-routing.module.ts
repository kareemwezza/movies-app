import { FilmInfoComponent } from './pages/filmInfo/filmInfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegestierComponent } from './pages/regestier/regestier.component';
import { SearchComponent } from './pages/search/search.component';
import { ActorprofileComponent } from './components/actorprofile/actorprofile.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegestierComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'movie/:id',
    component: FilmInfoComponent,
  },
  {
    path: 'actor/:id',
    component: ActorprofileComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
