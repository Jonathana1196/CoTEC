import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EstadoService} from '../../shared/EstadoService';

@Component({
  selector: 'app-vista-casos',
  templateUrl: './vista-casos.component.html',
  styleUrls: ['./vista-casos.component.css']
})
export class VistaCasosComponent implements OnInit {
  casos: FormArray = this.fb.array([]);
  activos = [];
  recuperados = [];
  muertos = [];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private EstadoService: EstadoService) { }

  ngOnInit(): void {
    this.EstadoService.activos().subscribe(res => this.activos = res as []);
    this.EstadoService.recuperados().subscribe(res => this.recuperados = res as []);
    this.EstadoService.muertos().subscribe(res => this.muertos = res as []);
    this.casos.push(this.fb.group({
      Contagiados : [this.activos.length],
      Activos : [this.activos.length],
      Recuperados : [this.recuperados.length],
      Muertos : [this.muertos.length]

    }));
  }

}
