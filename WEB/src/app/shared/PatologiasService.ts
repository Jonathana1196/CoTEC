import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatologiasService {

  constructor(private http: HttpClient) { }
  postPatologia(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Patologias', formData);
  }

  putPatologia(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Patologias/' + formData.Id, formData);
  }
  deletePatologia(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Patologias/' + id);
  }

  getPatologia(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Patologias');
  }


}
