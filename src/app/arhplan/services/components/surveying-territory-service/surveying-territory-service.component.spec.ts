import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyingTerritoryServiceComponent } from './surveying-territory-service.component';

describe('SurveyingTerritoryServiceComponent', () => {
  let component: SurveyingTerritoryServiceComponent;
  let fixture: ComponentFixture<SurveyingTerritoryServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyingTerritoryServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyingTerritoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
