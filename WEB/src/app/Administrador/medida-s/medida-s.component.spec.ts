import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidaSComponent } from './medida-s.component';

describe('MedidaSComponent', () => {
  let component: MedidaSComponent;
  let fixture: ComponentFixture<MedidaSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidaSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
