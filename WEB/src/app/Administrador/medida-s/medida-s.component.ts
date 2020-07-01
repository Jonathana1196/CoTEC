import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MedidaService} from '../../shared/MedidaService';

@Component({
  selector: 'app-medida-s',
  templateUrl: './medida-s.component.html',
  styleUrls: ['./medida-s.component.css']
})
export class MedidaSComponent implements OnInit {
  MedidaForms: FormArray = this.fb.array([]);
  notification = null;
  RegionList = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private MedidaService: MedidaService) { }

  ngOnInit(): void {
    this.MedidaService.getRegion().subscribe(res => this.RegionList = res as []);
    this.MedidaService.getMedida().subscribe(
      res => {
        if (res === []) {
          this.addMedida();
        }
        else{
          (res as []).forEach((medida: any) => {
            this.MedidaForms.push(this.fb.group({
              dataID : [1],
              Id : [medida.id],
              Nombre: [medida.nombre],
              Descripcion : [medida.descripcion],
              // tslint:disable-next-line:max-line-length
              FechaInicio : [new Date(new Date(medida.fechaInicio).getFullYear(), new Date(medida.fechaInicio).getMonth() , new Date(medida.fechaInicio).getDate())],
              FechaFinal : [new Date(medida.fechaFinal)],
              Region : [medida.region]
            }));
          });
        }
      }
    );
  }
  addMedida(){
    this.MedidaForms.push(this.fb.group({
      dataID : [0],
      Nombre: [''],
      Descripcion : [''],
      FechaInicio : [''],
      FechaFinal : [''],
      Region : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.MedidaService.postMedida(fg.value).subscribe(
        (res: any) => {
        }
      );
    }
    else{
      this.MedidaService.putMedida(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.MedidaService.deleteMedida(Id).subscribe(
      res => {
        this.MedidaForms.removeAt(i);
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
