import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavbaraComponent } from './Administrador/navbara/navbara.component';
import { TecboxaComponent } from './Administrador/tecboxa/tecboxa.component';
import { NavbarhComponent } from './home/navbarh/navbarh.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RegionComponent } from './Administrador/region/region.component';
import { PatologiaComponent } from './Administrador/patologia/patologia.component';
import { HospitalComponent } from './Administrador/hospital/hospital.component';
import { EstadoComponent } from './Administrador/estado/estado.component';
import { MedidaSComponent } from './Administrador/medida-s/medida-s.component';
import { MedicacionComponent } from './Administrador/medicacion/medicacion.component';
import { PacienteComponent } from './CentroHospital/paciente/paciente.component';
import { ContactoComponent } from './CentroHospital/contacto/contacto.component';
import { CoTECHospitalComponent } from './CentroHospital/co-techospital/co-techospital.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbaraComponent,
    TecboxaComponent,
    NavbarhComponent,
    HomeComponent,
    RegionComponent,
    PatologiaComponent,
    HospitalComponent,
    EstadoComponent,
    MedidaSComponent,
    MedicacionComponent,
    PacienteComponent,
    ContactoComponent,
    CoTECHospitalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
