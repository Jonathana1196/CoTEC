import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { RutasComponent } from './Administrador/rutas/rutas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },

  { path: 'Home', component: HomeComponent },

  { path: 'Register', component: RegisterComponent},

  { path: 'Login', component: LoginComponent},

  {
    path: 'TECBoxHA', pathMatch: 'prefix',
    children: [
      { path: 'RutasView', pathMatch: 'prefix', component: RutasComponent },
      { path: '', component: TecboxaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
