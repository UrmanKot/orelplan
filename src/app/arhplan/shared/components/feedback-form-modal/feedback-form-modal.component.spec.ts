import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackFormModalComponent } from './feedback-form-modal.component';

describe('FeedbackFormModalComponent', () => {
  let component: FeedbackFormModalComponent;
  let fixture: ComponentFixture<FeedbackFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackFormModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
