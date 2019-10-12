import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisterAircraftComponent } from './view-register-aircraft.component';

describe('ViewRegisterAircraftComponent', () => {
  let component: ViewRegisterAircraftComponent;
  let fixture: ComponentFixture<ViewRegisterAircraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRegisterAircraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRegisterAircraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
