import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionServiceComponent } from './construction-service.component';

describe('ConstructionServiceComponent', () => {
  let component: ConstructionServiceComponent;
  let fixture: ComponentFixture<ConstructionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
