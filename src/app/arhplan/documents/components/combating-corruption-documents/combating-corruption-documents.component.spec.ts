import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatingCorruptionDocumentsComponent } from './combating-corruption-documents.component';

describe('CombatingCorruptionDocumentsComponent', () => {
  let component: CombatingCorruptionDocumentsComponent;
  let fixture: ComponentFixture<CombatingCorruptionDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombatingCorruptionDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatingCorruptionDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
