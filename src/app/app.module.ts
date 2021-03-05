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
>>>>>>> 9baccc065403e8c4dfde1874b90b54e04e711c28

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ServicesComponent,
    PagesComponent,
    RecurrentComponent
=======
    ComponentsComponent
>>>>>>> 9baccc065403e8c4dfde1874b90b54e04e711c28
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
