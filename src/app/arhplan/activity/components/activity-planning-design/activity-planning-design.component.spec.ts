import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPlanningDesignComponent } from './activity-planning-design.component';

describe('ActivityPlanningDesignComponent', () => {
  let component: ActivityPlanningDesignComponent;
  let fixture: ComponentFixture<ActivityPlanningDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityPlanningDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPlanningDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
