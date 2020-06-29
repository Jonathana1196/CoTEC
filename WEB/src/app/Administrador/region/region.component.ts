import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegionesService} from '../../shared/RegionesService';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  RegionesForms: FormArray = this.fb.array([]);
  notification = null;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private fb: FormBuilder, private RegionesService: RegionesService) { }

  ngOnInit(): void {
    this.RegionesService.getRegion().subscribe(
      res => {
        if (res === []) {
          this.addRegion();
        }
        else{
          (res as []).forEach((region: any) => {
            this.RegionesForms.push(this.fb.group({
              dataID : [1],
              Id : [region.id, Validators.required],
              Pais: [region.pais],
              Estado: [region.estado]
            }));
          });
        }
      }
    );
  }
  addRegion(){
    this.RegionesForms.push(this.fb.group({
      dataID : [0],
      Pais: [''],
      Estado: ['']
    }));
  }
  recordSubmit(fg: FormGroup){
    if (fg.value.dataID === 0){
      this.showNotification('insert');
      this.RegionesService.postRegion(fg.value).subscribe(
      );
    }
    else{
      this.RegionesService.putRegion(fg.value).subscribe(
        (res: any) => {
          this.showNotification('update');
        }
      );

    }
  }
  onDelete(Id, i){
    this.RegionesService.deleteRegion(Id).subscribe(
      res => {
        this.RegionesForms.removeAt(i);
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
