import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityConstructionControlComponent } from './activity-construction-control.component';

describe('ActivityConstructionControlComponent', () => {
  let component: ActivityConstructionControlComponent;
  let fixture: ComponentFixture<ActivityConstructionControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityConstructionControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityConstructionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
