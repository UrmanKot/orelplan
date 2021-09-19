import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisogdPageComponent } from './gisogd-page.component';

describe('GisogdPageComponent', () => {
  let component: GisogdPageComponent;
  let fixture: ComponentFixture<GisogdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisogdPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GisogdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
