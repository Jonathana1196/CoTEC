import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {EstadoComponent} from './Administrador/estado/estado.component';
import {RegionComponent} from './Administrador/region/region.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },

  { path: 'Home', component: HomeComponent },

  { path: 'Register', component: RegisterComponent},

  { path: 'Login', component: LoginComponent},

  {
    path: 'CoTECadmin', pathMatch: 'prefix',
    children: [
      { path: 'EstadosView', pathMatch: 'prefix', component: EstadoComponent },
      { path: 'RegionesView', pathMatch: 'prefix', component: RegionComponent},

      { path: '', component: TecboxaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
