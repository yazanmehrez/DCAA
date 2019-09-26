import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRootComponent } from './account-root.component';

describe('AccountRootComponent', () => {
  let component: AccountRootComponent;
  let fixture: ComponentFixture<AccountRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
