import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingBordersServiceComponent } from './changing-borders-service.component';

describe('ChangingBordersServiceComponent', () => {
  let component: ChangingBordersServiceComponent;
  let fixture: ComponentFixture<ChangingBordersServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingBordersServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingBordersServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
