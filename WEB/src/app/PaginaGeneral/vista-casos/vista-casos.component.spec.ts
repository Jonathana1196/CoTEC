import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCasosComponent } from './vista-casos.component';

describe('VistaCasosComponent', () => {
  let component: VistaCasosComponent;
  let fixture: ComponentFixture<VistaCasosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCasosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
