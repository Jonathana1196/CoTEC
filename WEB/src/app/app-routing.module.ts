import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { HomeComponent } from './home/home.component';
import {EstadoComponent} from './Administrador/estado/estado.component';
import {RegionComponent} from './Administrador/region/region.component';
import {PatologiaComponent} from './Administrador/patologia/patologia.component';
import {HospitalComponent} from './Administrador/hospital/hospital.component';
import {MedidaSComponent} from './Administrador/medida-s/medida-s.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/Home', pathMatch: 'full'
  },

  { path: 'Home', component: HomeComponent },
  {
    path: 'CoTECadmin', pathMatch: 'prefix',
    children: [
      { path: 'EstadosView', pathMatch: 'prefix', component: EstadoComponent },
      { path: 'RegionesView', pathMatch: 'prefix', component: RegionComponent},
      { path: 'PatologiasView', pathMatch: 'prefix', component: PatologiaComponent},
      { path: 'HospitalesView', pathMatch: 'prefix', component: HospitalComponent},
      { path: 'MedidasView', pathMatch: 'prefix', component: MedidaSComponent},
      { path: '', component: TecboxaComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
