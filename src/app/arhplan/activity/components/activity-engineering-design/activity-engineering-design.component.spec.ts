import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEngineeringDesignComponent } from './activity-engineering-design.component';

describe('ActivityEngineeringDesignComponent', () => {
  let component: ActivityEngineeringDesignComponent;
  let fixture: ComponentFixture<ActivityEngineeringDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityEngineeringDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEngineeringDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
