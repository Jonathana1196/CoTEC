import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { HomeComponent } from './home/home.component';
import {EstadoComponent} from './Administrador/estado/estado.component';
import {RegionComponent} from './Administrador/region/region.component';
import {PatologiaComponent} from './Administrador/patologia/patologia.component';
import {HospitalComponent} from './Administrador/hospital/hospital.component';
import {MedidaSComponent} from './Administrador/medida-s/medida-s.component';
import {MedicacionComponent} from './Administrador/medicacion/medicacion.component';
import {CoTECHospitalComponent} from './CentroHospital/co-techospital/co-techospital.component'
import {PacienteComponent} from "./CentroHospital/paciente/paciente.component";
import {ContactoComponent} from "./CentroHospital/contacto/contacto.component";
import {VistaCasosComponent} from "./PaginaGeneral/vista-casos/vista-casos.component";
import {VistaCasosPaisComponent} from "./PaginaGeneral/vista-casos-pais/vista-casos-pais.component";
import {PagGeneralComponent} from "./PaginaGeneral/pag-general/pag-general.component";


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
      { path: 'MedicacionView', pathMatch: 'prefix', component: MedicacionComponent},
      { path: '', component: TecboxaComponent }
    ]
  },
  {
    path: 'CoTECHospital', pathMatch: 'prefix',
    children: [
      { path: 'PacientesView', pathMatch: 'prefix', component: PacienteComponent},
      { path: 'ContactosView', pathMatch: 'prefix', component: ContactoComponent},
      { path: '', component:  CoTECHospitalComponent}
    ]
  },
  {
    path: 'CoTECGeneral', pathMatch: 'prefix',
    children: [
      { path: 'CasosView', pathMatch: 'prefix', component: VistaCasosComponent},
      { path: 'CasosPaisView', pathMatch: 'prefix', component: VistaCasosPaisComponent},
      { path: '', component:  PagGeneralComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
