import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactoService} from '../../shared/ContactoService';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  ContactoForms: FormArray = this.fb.array([]);
  notification = null;
  RegionList = [];
  PacienteList = [];
  PatologiasList = [];

  constructor(private fb: FormBuilder, private ContactoService: ContactoService) { }

  ngOnInit(): void {
    this.ContactoService.getPatologias().subscribe(res => this.PatologiasList = res as []);
    this.ContactoService.getPaciente().subscribe(res => this.PacienteList = res as []);
    this.ContactoService.getRegion().subscribe(res => this.RegionList = res as []);
    this.ContactoService.getContacto().subscribe(
      res => {
        if (res === []) {
          this.addContacto();
        }
        else{
          (res as []).forEach((contacto: any) => {
            this.ContactoForms.push(this.fb.group({
              dataID : [1],
              Cedula: [contacto.cedula],
              Nombre : [contacto.nombre],
              Apellido : [contacto.apellido],
              Edad : [contacto.edad],
              Nacionalidad : [contacto.nacionalidad],
              Email : [contacto.email],
              Region : [contacto.region],
              Paciente : [contacto.paciente],
            }));
          });
        }
      }
    );

  }
  addContacto(){
    this.ContactoForms.push(this.fb.group({
      dataID : [0],
      Cedula: [''],
      Nombre : [''],
      Apellido : [''],
      Edad : [''],
      Nacionalidad : [''],
      Email : [''],
      Region : [''],
      Paciente : [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.ContactoService.postContacto(fg.value).subscribe(
        (res: any) => {
        }
      );
    }
    else{
      this.ContactoService.putContacto(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(cedula, i){
    this.ContactoService.deleteContacto(cedula).subscribe(
      res => {
        this.ContactoForms.removeAt(i);
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
