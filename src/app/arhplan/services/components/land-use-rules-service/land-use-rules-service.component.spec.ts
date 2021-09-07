import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandUseRulesServiceComponent } from './land-use-rules-service.component';

describe('LandUseRulesServiceComponent', () => {
  let component: LandUseRulesServiceComponent;
  let fixture: ComponentFixture<LandUseRulesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandUseRulesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandUseRulesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
