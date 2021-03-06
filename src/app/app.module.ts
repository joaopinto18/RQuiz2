import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { RecurrentComponent } from './recurrent/recurrent.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './pages/home/home.component';
import { ListapelisComponent } from './pages/listapelis/listapelis.component';
import { DetallecadapeliComponent } from './pages/detallecadapeli/detallecadapeli.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { ListareservasComponent } from './pages/listareservas/listareservas.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostcardComponent } from './components/postcard/postcard.component';
import { ModelsComponent } from './models/models.component';
import { PelisfavoritasComponent } from './pages/pelisfavoritas/pelisfavoritas.component';
import { MiniPostcardComponent } from './components/mini-postcard/mini-postcard.component';

//insertado de modulos para el tema de firebase
import { AngularFireModule } from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MoviesComponent } from './services/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    RecurrentComponent,
    ComponentsComponent,
    HomeComponent,
    ListapelisComponent,
    DetallecadapeliComponent,
    ReservarComponent,
    ListareservasComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    PostcardComponent,
    ModelsComponent,
    PelisfavoritasComponent,
    MiniPostcardComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
