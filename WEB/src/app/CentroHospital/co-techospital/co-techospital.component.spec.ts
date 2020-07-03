import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTECHospitalComponent } from './co-techospital.component';

describe('CoTECHospitalComponent', () => {
  let component: CoTECHospitalComponent;
  let fixture: ComponentFixture<CoTECHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoTECHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoTECHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
