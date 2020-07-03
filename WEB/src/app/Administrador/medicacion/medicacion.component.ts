import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MedicacionService} from '../../shared/MedicacionService';

@Component({
  selector: 'app-medicacion',
  templateUrl: './medicacion.component.html',
  styleUrls: ['./medicacion.component.css']
})
export class MedicacionComponent implements OnInit {
  MedicacionForms: FormArray = this.fb.array([]);
  notification = null;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private MedicacionService: MedicacionService) { }
  ngOnInit(): void {
    this.MedicacionService.getMedicacion().subscribe(
      res => {
        if (res === []) {
          this.addMedicacion();
        }
        else{
          (res as []).forEach((medicacion: any) => {
            this.MedicacionForms.push(this.fb.group({
              dataID : [1],
              Id : [medicacion.id, Validators.required],
              Nombre: [medicacion.nombre],
              CasaFarmaceutica: [medicacion.casaFarmaceutica],
              Paciente: [medicacion.paciente]
            }));
          });
        }
      }
    );
  }
  addMedicacion(){
    this.MedicacionForms.push(this.fb.group({
      dataID : [0],
      Nombre: [''],
      CasaFarmaceutica: [''],
      Paciente: [0]
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.MedicacionService.postMedicacion(fg.value).subscribe(
      );
    }
    else{
      this.MedicacionService.putMedicacion(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.MedicacionService.deleteMedicacion(Id).subscribe(
      res => {
        this.MedicacionForms.removeAt(i);
        this.showNotification('delete');
      }
    );
  }

  showNotification(category){
    switch (category) {
      case 'insert':
        this.notification = {class: 'text-success', message: 'Saved'};
        break;
      case 'update':
        this.notification = {class: 'text-primary', message: 'Updated'};
        break;
      case 'delete':
        this.notification = {class: 'text-danger', message: 'Deleted'};
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, 3000);
  }

}
