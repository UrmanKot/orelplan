import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringSurveysServiceComponent } from './engineering-surveys-service.component';

describe('EngineeringSurveysServiceComponent', () => {
  let component: EngineeringSurveysServiceComponent;
  let fixture: ComponentFixture<EngineeringSurveysServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineeringSurveysServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringSurveysServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
