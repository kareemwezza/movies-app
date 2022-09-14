import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegestierComponent } from './pages/regestier/regestier.component';
import { SearchComponent } from './pages/search/search.component';

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
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'home',
  // },
  {
    path:'search',
    component:SearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
