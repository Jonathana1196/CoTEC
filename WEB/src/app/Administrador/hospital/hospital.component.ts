import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HospitalService} from '../../shared/HospitalService';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  HospitalesForms: FormArray = this.fb.array([]);
  notification = null;
  RegionList = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private HospitalService: HospitalService) { }

  ngOnInit(): void {
    this.HospitalService.getRegion().subscribe(res => this.RegionList = res as []);
    this.HospitalService.getHospital().subscribe(
      res => {
        if (res === []) {
          this.addHospital();
        }
        else{
          (res as []).forEach((hospital: any) => {
            this.HospitalesForms.push(this.fb.group({
              dataID : [1],
              Id : [hospital.id],
              Nombre : [hospital.nombre],
              Director : [hospital.director],
              Capacidad : [hospital.capacidad],
              Contacto : [hospital.contacto],
              CamasUCI : [hospital.camasUCI],
              Region : [hospital.region]
            }));
          });
        }
      }
    );

  }
  addHospital(){
    this.HospitalesForms.push(this.fb.group({
      dataID : [0],
      Nombre : [''],
      Director : [''],
      Capacidad : [''],
      Contacto : [''],
      CamasUCI : [''],
      Region : ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.HospitalService.postHospital(fg.value).subscribe(
        (res: any) => {
        }
      );
    }
    else{
      this.HospitalService.putHospital(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.HospitalService.deleteHospital(Id).subscribe(
      res => {
        this.HospitalesForms.removeAt(i);
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
