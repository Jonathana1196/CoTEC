import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }
  getPatologias() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Patologias');
  }
  getEstado() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Estados');
  }
  getRegion() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Regiones');
  }
  getMedicacion() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Medicaciones');
  }

  postPaciente(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Pacientes', formData);
  }

  putPaciente(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Pacientes/' + formData.Cedula, formData);
  }
  deletePaciente(cedula) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Pacientes/' + cedula);
  }

  getPaciente(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Pacientes');
  }


}
