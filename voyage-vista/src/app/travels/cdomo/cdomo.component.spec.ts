import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdomoComponent } from './cdomo.component';

describe('CdomoComponent', () => {
  let component: CdomoComponent;
  let fixture: ComponentFixture<CdomoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdomoComponent]
    });
    fixture = TestBed.createComponent(CdomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
