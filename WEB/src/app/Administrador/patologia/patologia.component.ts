import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PatologiasService} from '../../shared/PatologiasService';

@Component({
  selector: 'app-patologia',
  templateUrl: './patologia.component.html',
  styleUrls: ['./patologia.component.css']
})
export class PatologiaComponent implements OnInit {
  PatologiasForms: FormArray = this.fb.array([]);
  notification = null;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private PatologiasService: PatologiasService) { }

  ngOnInit(): void {
    this.PatologiasService.getPatologia().subscribe(
      res => {
        if (res === []) {
          this.addPatologia();
        }
        else{
          (res as []).forEach((patologia: any) => {
            this.PatologiasForms.push(this.fb.group({
              dataID : [1],
              Id : [patologia.id],
              Nombre : [patologia.nombre],
              Descripcion : [patologia.descripcion],
              Sintomas : [patologia.sintomas],
              Tratamiento : [patologia.tratamiento]
            }));
          });
        }
      }
    );
  }
  addPatologia(){
    this.PatologiasForms.push(this.fb.group({
      dataID : [0],
      Nombre : [''],
      Descripcion : [''],
      Sintomas : [''],
      Tratamiento : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.PatologiasService.postPatologia(fg.value).subscribe(
      );
    }
    else{
      this.PatologiasService.putPatologia(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.PatologiasService.deletePatologia(Id).subscribe(
      res => {
        this.PatologiasForms.removeAt(i);
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
