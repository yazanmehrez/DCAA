import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenResetComponent } from './token-reset.component';

describe('TokenResetComponent', () => {
  let component: TokenResetComponent;
  let fixture: ComponentFixture<TokenResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
