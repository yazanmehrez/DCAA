import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCompComponent } from './img-comp.component';

describe('ImgCompComponent', () => {
  let component: ImgCompComponent;
  let fixture: ComponentFixture<ImgCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
