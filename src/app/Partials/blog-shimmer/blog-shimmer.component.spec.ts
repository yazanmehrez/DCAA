import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShimmerComponent } from './blog-shimmer.component';

describe('BlogShimmerComponent', () => {
  let component: BlogShimmerComponent;
  let fixture: ComponentFixture<BlogShimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogShimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
