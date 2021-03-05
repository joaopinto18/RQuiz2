import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { RecurrentComponent } from './recurrent/recurrent.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PagesComponent,
    RecurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
