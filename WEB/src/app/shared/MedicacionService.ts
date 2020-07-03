import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }
  getRegion() {
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Regiones');
  }

  postHospital(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Hospitales', formData);
  }

  putHospital(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Hospitales/' + formData.Id, formData);
  }
  deleteHospital(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Hospitales/' + id);
  }

  getHospital(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Hospitales');
  }


}
