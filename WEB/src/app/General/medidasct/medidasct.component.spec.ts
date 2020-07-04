import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedidasctComponent } from './medidasct.component';

describe('MedidasctComponent', () => {
  let component: MedidasctComponent;
  let fixture: ComponentFixture<MedidasctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedidasctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedidasctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
