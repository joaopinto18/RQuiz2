import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ServicesComponent } from './services/services.component';
import { ModelsComponent } from './models/models.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
