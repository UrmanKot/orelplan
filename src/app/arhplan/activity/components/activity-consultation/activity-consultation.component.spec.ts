import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityConsultationComponent } from './activity-consultation.component';

describe('ActivityConsultationComponent', () => {
  let component: ActivityConsultationComponent;
  let fixture: ComponentFixture<ActivityConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityConsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
