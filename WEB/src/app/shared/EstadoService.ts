import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }
  activos(){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Activos');
  }
  recuperados(){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Recuperados');
  }
  muertos(){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Muertos');
  }
  activosP(pais){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Activos/' + pais);
  }
  recuperadosP(pais){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Recuperados/' + pais);
  }
  muertosP(pais){
    return this.http.get('http://127.0.0.1:5001/CoTEC/Pacientes/Muertos/' + pais);
  }
  postEstado(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Estados', formData);
  }

  putEstado(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Estados/' + formData.Id, formData);
  }
  deleteEstado(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Estados/' + id);
  }

  getEstado(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Estados');
  }


}
