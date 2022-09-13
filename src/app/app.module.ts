import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { OffersModule } from './components/offers/offers.module';
import { ScrollTopModule } from 'primeng/scrolltop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ActorComponent } from './components/actor/actor.component';
import { LoginComponent } from './pages/login/login.component';
import { RegestierComponent } from './pages/regestier/regestier.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { MessageService } from 'primeng/api';

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
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
