import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSearchComponent } from './child-search.component';

describe('ChildSearchComponent', () => {
  let component: ChildSearchComponent;
  let fixture: ComponentFixture<ChildSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSearchComponent]
    });
    fixture = TestBed.createComponent(ChildSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
