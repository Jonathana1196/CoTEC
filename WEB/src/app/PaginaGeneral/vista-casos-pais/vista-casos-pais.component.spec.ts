import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCasosPaisComponent } from './vista-casos-pais.component';

describe('VistaCasosPaisComponent', () => {
  let component: VistaCasosPaisComponent;
  let fixture: ComponentFixture<VistaCasosPaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCasosPaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCasosPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
