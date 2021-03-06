import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallecadapeliComponent } from './pages/detallecadapeli/detallecadapeli.component';
import { HomeComponent } from './pages/home/home.component';
import { ListapelisComponent } from './pages/listapelis/listapelis.component';
import { LoginComponent } from './pages/login/login.component';
import { PelisfavoritasComponent } from './pages/pelisfavoritas/pelisfavoritas.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'listapelis', component:ListapelisComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'pelisfavoritas', component:PelisfavoritasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
