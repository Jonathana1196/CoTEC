import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicacionService {

  constructor(private http: HttpClient) { }

  postMedicacion(formData) {
    return this.http.post('http://127.0.0.1:5001/' + 'CoTEC/Medicaciones', formData);
  }
  putMedicacion(formData) {
    return this.http.put('http://127.0.0.1:5001/' + 'CoTEC/Medicaciones/' + formData.Id, formData);
  }
  deleteMedicacion(id) {
    return this.http.delete('http://127.0.0.1:5001/' + 'CoTEC/Medicaciones/' + id);
  }
  getMedicacion(){
    return this.http.get('http://127.0.0.1:5001/' + 'CoTEC/Medicaciones');
  }
}
