import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPagetComponent } from './accept-paget.component';

describe('AcceptPagetComponent', () => {
  let component: AcceptPagetComponent;
  let fixture: ComponentFixture<AcceptPagetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptPagetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPagetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
