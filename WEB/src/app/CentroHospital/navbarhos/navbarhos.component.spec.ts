import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhosComponent } from './navbarhos.component';

describe('NavbarhosComponent', () => {
  let component: NavbarhosComponent;
  let fixture: ComponentFixture<NavbarhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
