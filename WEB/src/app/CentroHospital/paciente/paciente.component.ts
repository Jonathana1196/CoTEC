import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PacienteService} from '../../shared/PacienteService';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  PacienteForms: FormArray = this.fb.array([]);
  notification = null;
  RegionList = [];
  EstadoList = [];
  PatologiasList = [];
  MedicacionList = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private PacienteService: PacienteService) { }

  ngOnInit(): void {
    this.PacienteService.getPatologias().subscribe(res => this.PatologiasList = res as []);
    this.PacienteService.getEstado().subscribe(res => this.EstadoList = res as []);
    this.PacienteService.getMedicacion().subscribe(res => this.MedicacionList = res as []);
    this.PacienteService.getRegion().subscribe(res => this.RegionList = res as []);
    this.PacienteService.getPaciente().subscribe(
      res => {
        if (res === []) {
          this.addPaciente();
        }
        else{
          (res as []).forEach((paciente: any) => {
            this.PacienteForms.push(this.fb.group({
              dataID : [1],
              Cedula: [paciente.cedula],
              Nombre : [paciente.nombre],
              Apellido : [paciente.apellido],
              Edad : [paciente.edad],
              Nacionalidad : [paciente.nacionalidad],
              UCI : [paciente.uci],
              Region : [paciente.region],
              Estado : [paciente.estado],
              Internado : [paciente.internado],

            }));
          });
        }
      }
    );
  }
  addPaciente(){
    this.PacienteForms.push(this.fb.group({
      dataID : [0],
      Cedula: [''],
      Nombre : [''],
      Apellido : [''],
      Edad : [''],
      Nacionalidad : [''],
      UCI : [''],
      Region : [''],
      Estado : [''],
      Internado : [''],
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.PacienteService.postPaciente(fg.value).subscribe(
        (res: any) => {
        }
      );
    }
    else{
      this.PacienteService.putPaciente(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(cedula, i){
    this.PacienteService.deletePaciente(cedula).subscribe(
      res => {
        this.PacienteForms.removeAt(i);
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
