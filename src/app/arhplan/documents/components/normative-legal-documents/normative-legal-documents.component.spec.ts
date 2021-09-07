import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativeLegalDocumentsComponent } from './normative-legal-documents.component';

describe('NormativeLegalDocumentsComponent', () => {
  let component: NormativeLegalDocumentsComponent;
  let fixture: ComponentFixture<NormativeLegalDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormativeLegalDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormativeLegalDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
