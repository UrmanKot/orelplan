import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityConstructionManagementComponent } from './activity-construction-management.component';

describe('ActivityConstructionManagementComponent', () => {
  let component: ActivityConstructionManagementComponent;
  let fixture: ComponentFixture<ActivityConstructionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityConstructionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityConstructionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
