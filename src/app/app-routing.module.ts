import { FilmInfoComponent } from './pages/filmInfo/filmInfo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegestierComponent } from './pages/regestier/regestier.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegestierComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '*',
    redirectTo: 'home',
  },
  {
    path: 'movie/:id',
    component: FilmInfoComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
