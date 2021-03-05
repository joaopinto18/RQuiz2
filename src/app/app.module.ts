import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { RecurrentComponent } from './recurrent/recurrent.component';
=======
import { ComponentsComponent } from './components/components.component';
<<<<<<< HEAD
>>>>>>> 9baccc065403e8c4dfde1874b90b54e04e711c28
=======
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
import { ServicesComponent } from './services/services.component';
import { ModelsComponent } from './models/models.component';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ServicesComponent,
    PagesComponent,
    RecurrentComponent
=======
    ComponentsComponent
>>>>>>> 9baccc065403e8c4dfde1874b90b54e04e711c28
=======
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
    ServicesComponent,
    ModelsComponent
>>>>>>> dev
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
