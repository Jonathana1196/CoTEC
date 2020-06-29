import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  constructor(private http: HttpClient) { }
  postRegion(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Regiones', formData);
  }

  putRegion(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Regiones/' + formData.Id, formData);
  }
  deleteRegion(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Regiones/' + id);
  }

  getRegion(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Regiones');
  }


}
