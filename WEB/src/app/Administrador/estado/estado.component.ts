import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';
import {timeout} from 'rxjs/operators';
import {RutasService} from '../../shared/RutasService';
import {EstadoService} from '../../shared/EstadoService';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  EstadosForms: FormArray = this.fb.array([]);
  notification = null;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private EstadoService: EstadoService) { }

  ngOnInit(): void {
    this.EstadoService.getEstado().subscribe(
      res => {
        if (res === []) {
          this.addEstado();
        }
        else{
          (res as []).forEach((estado: any) => {
            this.EstadosForms.push(this.fb.group({
              dataID : [1],
              Id : [estado.id, Validators.required],
              Descripcion: [estado.descripcion]
            }));
          });
        }
      }
    );
  }
  addEstado(){
    this.EstadosForms.push(this.fb.group({
      dataID : [0],
      Descripcion : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.EstadoService.postEstado(fg.value).subscribe(
      );
    }
    else{
      this.EstadoService.putEstado(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.EstadoService.deleteEstado(Id).subscribe(
      res => {
        this.EstadosForms.removeAt(i);
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
