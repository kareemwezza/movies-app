import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FilmInfoComponent } from './pages/filmInfo/filmInfo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { OffersModule } from './components/offers/offers.module';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkeletonModule } from 'primeng/skeleton';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { ChipModule } from 'primeng/chip';
import { DialogModule } from 'primeng/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './pages/login/login.component';
import { RegestierComponent } from './pages/regestier/regestier.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ActorsSectionComponent } from './components/actors-section/actors-section.component';
import { MoviesSectionComponent } from './components/movies-section/movies-section.component';
import { IntroComponent } from './components/intro/intro.component';
import { SearchComponent } from './pages/search/search.component';
import { ActorprofileComponent } from './components/actorprofile/actorprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegestierComponent,
    LoginRegisterComponent,
    ActorComponent,
    ActorsSectionComponent,
    MoviesSectionComponent,
    MovieComponent,
    FilmInfoComponent,
    IntroComponent,
    SearchComponent,
    ActorprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    OffersModule,
    HttpClientModule,
    ScrollTopModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    SkeletonModule,
    ChipModule,
    BreadcrumbModule,
    DialogModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
