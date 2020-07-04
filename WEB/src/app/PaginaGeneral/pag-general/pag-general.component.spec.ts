import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagGeneralComponent } from './pag-general.component';

describe('PagGeneralComponent', () => {
  let component: PagGeneralComponent;
  let fixture: ComponentFixture<PagGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
