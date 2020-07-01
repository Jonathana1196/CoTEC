import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedidaService {

  constructor(private http: HttpClient) { }
  getRegion() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Regiones');
  }

  postMedida(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/MedidasSanitarias', formData);
  }

  putMedida(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/MedidasSanitarias/' + formData.Id, formData);
  }
  deleteMedida(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/MedidasSanitarias/' + id);
  }

  getMedida(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/MedidasSanitarias');
  }


}
