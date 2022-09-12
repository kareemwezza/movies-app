import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonModule } from "primeng/button";
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './shared/services/movies.service';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ButtonModule,ChipModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
