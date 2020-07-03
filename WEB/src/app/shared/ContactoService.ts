import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) { }
  getPatologias() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Patologias');
  }
  getPaciente() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Pacientes');
  }
  getRegion() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Regiones');
  }

  postContacto(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Contactos', formData);
  }

  putContacto(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Contactos/' + formData.Cedula, formData);
  }
  deleteContacto(cedula) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Contactos/' + cedula);
  }
  getContacto(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Contactos');
  }


}
