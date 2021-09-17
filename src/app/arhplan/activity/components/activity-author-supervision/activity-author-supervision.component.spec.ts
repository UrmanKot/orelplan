import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAuthorSupervisionComponent } from './activity-author-supervision.component';

describe('ActivityAuthorSupervisionComponent', () => {
  let component: ActivityAuthorSupervisionComponent;
  let fixture: ComponentFixture<ActivityAuthorSupervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityAuthorSupervisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAuthorSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
